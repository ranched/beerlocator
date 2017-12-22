import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import breweries from  './components/topList.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: props.breweries
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: props.breweries
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div>
          <h1>Beer-By</h1>

          <List items={this.state.items}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App breweries={breweries}/>, document.getElementById('app'));


const data = [  
  {
    "name": "Jester King Brewery",
    "address": "13005 Fitzhugh Road",
    "averageRating": 4.08,
    "ratingsCount": 19540,
    "ba_profile_id": 24018
  },
  {
    "name": "Oddwood Ales",
    "address": "3108 Manor Rd",
    "averageRating": 3.96,
    "ratingsCount": 167,
    "ba_profile_id": 37083
  },
  {
    "name": "St. Elmo Brewing Co.",
    "address": "440 E St Elmo Rd",
    "averageRating": 3.93,
    "ratingsCount": 99,
    "ba_profile_id": 47537
  },
  {
    "name": "(512) Brewing Company",
    "address": "407 Radam Ln",
    "averageRating": 3.88,
    "ratingsCount": 2816,
    "ba_profile_id": 17863
  },
  {
    "name": "Draught House Pub & Brewery",
    "address": "4112 Medical Parkway",
    "averageRating": 3.87,
    "ratingsCount": 139,
    "ba_profile_id": 4858
  },
  {
    "name": "Celis Brewery",
    "address": "10001 Metric Blvd",
    "averageRating": 3.84,
    "ratingsCount": 67,
    "ba_profile_id": 49549
  },
  {
    "name": "Pinthouse Pizza South Austin",
    "address": "4236 S Lamar Blvd",
    "averageRating": 3.8,
    "ratingsCount": 611,
    "ba_profile_id": 31066
  },
  {
    "name": "Austin Beerworks",
    "address": "3009 Industrial Terrace",
    "averageRating": 3.8,
    "ratingsCount": 2466,
    "ba_profile_id": 25667
  },
  {
    "name": "Pinthouse Pizza Craft Brewpub",
    "address": "4729 Burnet Rd",
    "averageRating": 3.8,
    "ratingsCount": 611,
    "ba_profile_id": 31066
  },
  {
    "name": "Adelbert's Brewery",
    "address": "2314 Rutland Drive Suite #100",
    "averageRating": 3.8,
    "ratingsCount": 1215,
    "ba_profile_id": 27934
  },
  {
    "name": "Oasis Texas Brewing Company",
    "address": "6550 Comanche Trail",
    "averageRating": 3.79,
    "ratingsCount": 733,
    "ba_profile_id": 35016
  },
  {
    "name": "Lazarus Brewing Company",
    "address": "1902 E 6th St",
    "averageRating": 3.76,
    "ratingsCount": 69,
    "ba_profile_id": 48264
  },
  {
    "name": "Hi Sign Brewing",
    "address": "1201 Bastrop Hwy",
    "averageRating": 3.76,
    "ratingsCount": 57,
    "ba_profile_id": 48409
  },
  {
    "name": "Friends & Allies Brewing",
    "address": "979 Springdale Rd",
    "averageRating": 4,
    "ratingsCount": 73,
    "ba_profile_id": 44036
  },
  {
    "name": "Last Stand Brewing Company",
    "address": "12345 Pauls Valley Rd",
    "averageRating": 3.69,
    "ratingsCount": 144,
    "ba_profile_id": 39248
  },
  {
    "name": "Blue Owl Brewing",
    "address": "2400 East Cesar Chavez St #300",
    "averageRating": 3.68,
    "ratingsCount": 322,
    "ba_profile_id": 35964
  },
  {
    "name": "Hops and Grain Brewery",
    "address": "507 Calles St",
    "averageRating": 3.67,
    "ratingsCount": 1518,
    "ba_profile_id": 27696
  },
  {
    "name": "North by Northwest Restaurant & Brewery",
    "address": "10010 Capital Of TX Hwy N",
    "averageRating": 3.67,
    "ratingsCount": 533,
    "ba_profile_id": 2642
  },
  {
    "name": "Zilker Brewing Co.",
    "address": "1701 E 6th St",
    "averageRating": 3.63,
    "ratingsCount": 208,
    "ba_profile_id": 40217
  },
  {
    "name": "Kamala Brewing / Whip In",
    "address": "1950 S. Interstate 35",
    "averageRating": 3.63,
    "ratingsCount": 87,
    "ba_profile_id": 1418
  },
  {
    "name": "Austin Beer Garden Brewing Co.",
    "address": "1305 W Oltorf St",
    "averageRating": 3.59,
    "ratingsCount": 205,
    "ba_profile_id": 32581
  },
  {
    "name": "Uncle Billy's Brew & Que",
    "address": "1530 Barton Springs Rd.",
    "averageRating": 3.57,
    "ratingsCount": 373,
    "ba_profile_id": 16088
  },
  {
    "name": "Independence Brewing Co.",
    "address": "3913 Todd Ln",
    "averageRating": 3.56,
    "ratingsCount": 2157,
    "ba_profile_id": 10284
  },
  {
    "name": "Circle Brewing Company",
    "address": "2340 W Braker Ln.",
    "averageRating": 3.53,
    "ratingsCount": 327,
    "ba_profile_id": 24825
  },
  {
    "name": "Naughty Brewing Co.",
    "address": "2314 Rutland Dr",
    "averageRating": 3.52,
    "ratingsCount": 19,
    "ba_profile_id": 33668
  },
  {
    "name": "Infamous Brewing Company",
    "address": "4601 Weletka Dr Ste 200",
    "averageRating": 3.51,
    "ratingsCount": 421,
    "ba_profile_id": 31874
  },
  {
    "name": "South Austin Brewery",
    "address": "415 E St Elmo Rd",
    "averageRating": 3.49,
    "ratingsCount": 235,
    "ba_profile_id": 28397
  },
  {
    "name": "Oskar Blues Brewery",
    "address": "10420 Metric Blvd",
    "averageRating": 3.48,
    "ratingsCount": 16,
    "ba_profile_id": 46686
  },
  {
    "name": "Resignation Brewery",
    "address": "503 Neches St",
    "averageRating": 3.41,
    "ratingsCount": 903,
    "ba_profile_id": 32990
  },
  {
    "name": "Thirsty Planet Brewing Company",
    "address": "11160 Circle Drive",
    "averageRating": 3.39,
    "ratingsCount": 457,
    "ba_profile_id": 23090
  },
  {
    "name": "Guns & Oil Brewing Co.",
    "address": "807 E 4th St",
    "averageRating": 3.35,
    "ratingsCount": 85,
    "ba_profile_id": 36084
  },
  {
    "name": "North by Northwest Restaurant & Brewery - South",
    "address": "5701 W Slaughter Ln",
    "averageRating": "",
    "ratingsCount": "",
    "ba_profile_id": ""
  },
  {
    "name": "4th Tap Brewing Co-op",
    "address": "10615 Metric Blvd",
    "averageRating": "",
    "ratingsCount": "",
    "ba_profile_id": ""
  },
  {
    "name": "Black Star Co-op Pub & Brewery",
    "address": "7020 Easy Wind Drive",
    "averageRating": "",
    "ratingsCount": "",
    "ba_profile_id": ""
  }
]

module.exports.data = data