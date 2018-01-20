var request = require('request'),
    rp = require('request-promise'),
    cheerio = require('cheerio'),
    Bluebird = require("bluebird");


///////// Brewery Functionality /////////

//accepts a brewery name and searches BeerAdvocate
//returns html of search results page
let brewerySearchBA= (breweryName) => {

  let options = {
    uri: 'http://beeradvocate.com/search', 
    qs: {
      q: breweryName,
      qt: 'place'
    }
  };
  return rp(options);
};

//accepts html of BeerAdvocate search results
//returns object containing name, location, and url
function scrapeBrewerySearchBA(html) {
  return new Promise((resolve, reject) => {
    var breweryObjs = [];
    if (html !== undefined) {
      var $ = cheerio.load(html);
      
      // One beer listing
      var li = $('#ba-content ul li').eq(0);

        // Brewery details
        var brewery = li.children('a').eq(0),
            brewery_name = brewery.text(),
            brewery_url = brewery.attr('href'),
            brewery_location = brewery.find('span').text();

        // Data to return
        var data = {
            name: brewery_name,
            brewery_location: brewery_location,
            brewery_url: brewery_url
        };

        // Add to beer array
        breweryObjs.push(data);
    }
  
    resolve(breweryObjs);    

  });
}




module.exports.brewerySearchBA = brewerySearchBA;
module.exports.scrapeBrewerySearchBA = scrapeBrewerySearchBA;

let breweryPageBA= (BaBreweryID) => {

  let options = {
    uri: 'http://beeradvocate.com' + BaBreweryID 
  };
  return rp(options);
};

function scrapeBreweryPageBA(html) {
  
  return new Promise((resolve, reject) => {
    
    if (html !== undefined) {
      var $ = cheerio.load(html);
     

      var breweryUrl = $('meta[property="og:url"]').attr('content');
      var breweryName = $('h1').text();
      var ratingAndCount = $('#score_box').text().split(/\s+/g);
      var city = $('#info_box a').eq(0).text();
      var state = $('#info_box a').eq(1).text();
      var isNumber = num => !Number.isNaN(parseInt(num));
      var re = /\//g;
      // Data to return
      var data = {
        name: breweryName,
        avg_rating: ratingAndCount[3].slice(0, ratingAndCount[3].indexOf('/')),
        review_count: ratingAndCount.filter(item => isNumber(item) && !re.test(item) ),
        city: city,
        state: state,
        breweryUrl: breweryUrl
      };

    }
    resolve(data); 
  });
}

module.exports.breweryPageBA = breweryPageBA;
module.exports.scrapeBreweryPageBA = scrapeBreweryPageBA;


///////// Beer Functionality /////////

exports.beerSearch = function(query, callback) {

    var url = "http://beeradvocate.com/search/?q=" + encodeURIComponent(query) + "&qt=beer";

    request(url, function (error, response, html) {

        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);

            var beers = [];

            $('#ba-content ul li').each(function(beer) {

                // One beer listing
                var li = $(this);

                // Beer details
                var beer = li.children('a').eq(0),
                    beer_name = beer.text(),
                    beer_url = beer.attr('href');

                // Brewery details
                var brewery = li.children('a').eq(1),
                    brewery_name = brewery.text(),
                    brewery_url = brewery.attr('href'),
                    brewery_location = brewery.next().text();

                // Retired?
                var retired = false;
                if (beer.prev().text() === "Retired - ") {
                    var retired = true;
                }

                // Data to return
                var data = {
                    beer_name: beer_name,
                    beer_url: beer_url,
                    brewery_name: brewery_name,
                    brewery_location: brewery_location.slice(2),
                    brewery_url: brewery_url,
                    retired: retired
                };

                // Add to beer array
                beers.push(data);

            });

            callback(JSON.stringify(beers));

        }

    });

};

exports.beerPage = function(url, callback) {

    var url = "http://beeradvocate.com" + url;

    request(url, function (error, response, html) {

        if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);

            var beer = [];

            // Beer & brewery name
            var title = $('h1').text().split(" | "),
                beer_name = title[0],
                brewery_name = title[1];

            // ABV
            var beer_abv_chunk = $('#ba-content > div:nth-child(4) > div:nth-child(2)').text(),
                beer_abv_start = $('#ba-content > div:nth-child(4) > div:nth-child(2)').text().indexOf("(ABV)"),
                beer_abv_end = $('#ba-content > div:nth-child(4) > div:nth-child(2)').text().indexOf("%"),
                beer_abv = beer_abv_chunk.substring(beer_abv_start+"(ABV): ".length, beer_abv_end+1);

            // Brewery details
            var brewery_state = $('#ba-content > div:nth-child(4) > div:nth-child(2) > a:nth-child(9)').text(),
                brewery_country = $('#ba-content > div:nth-child(4) > div:nth-child(2) > a:nth-child(10)').text();
                // beer_style = links.eq(4).text();

            var beerStyleSelection = $('#ba-content > div:nth-child(4) > div:nth-child(2) > a:nth-child(16) > b');
            var beer_style = beerStyleSelection.text();

            // Beer Advocate scores
            var ba_info = $('.BAscore_big').eq(0),
                ba_score = ba_info.text(),
                ba_rating = ba_info.next().next().text();

            var bros_info = $('.BAscore_big').eq(1),
                bros_score = bros_info.text(),
                bros_rating = bros_info.next().next().text();

            // More stats
            var stats = $('#ba-content > div:nth-child(4) > div:nth-child(3)').text(),
                ratings_index = stats.indexOf("Ratings:"),
                reviews_index = stats.indexOf("Reviews:"),
                avg_index = stats.indexOf("Avg:"),
                pdev_index = stats.indexOf("pDev:"),
                wants_index = stats.indexOf("Wants:"),
                ratings = stats.substring(ratings_index+"Ratings:".length, reviews_index).trim().replace(/\s/g, '').replace(":", ": "),
                reviews = stats.substring(reviews_index+"Reviews:".length, avg_index).trim().replace(/\s/g, '').replace(":", ": "),
                avg = stats.substring(avg_index+"Avg:".length, pdev_index).trim().replace(/\s/g, '').replace(":", ": "),
                pDev = stats.substring(pdev_index+"pDev:".length, wants_index).trim().replace(/\s/g, '').replace(":", ": ");


            // Data to return
            var data = {
                beer_name: beer_name,
                beer_style: beer_style,
                beer_abv: beer_abv,
                brewery_name: brewery_name,
                brewery_state: brewery_state,
                brewery_country: brewery_country,
                ba_score: ba_score,
                ba_rating: ba_rating,
                bros_score: bros_score,
                bros_rating: bros_rating,
                ratings: ratings,
                reviews: reviews,
                avg: avg,
                pDev: pDev
            };

            // Add to beer array
            beer.push(data);

            callback(JSON.stringify(beer));

        }

    });

};

