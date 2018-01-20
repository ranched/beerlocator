const rp = require('request-promise');
const config = require('../config.js');

const log = (obj) => {
  let brewObj = JSON.parse(obj).data ? JSON.parse(obj).data[0].name : null;
  //console.log('sID:', brewObj);
  return obj;
};
const returnFirst = (obj) => JSON.parse(obj).data ? JSON.parse(obj).data[0].name : null;

//searches the BreweryDB /search endpoint
let searchBreweryIDbreweryDB = (breweryName) => {

  let options = {
    uri: 'http://api.brewerydb.com/v2/search', 
    qs: {
      key: process.env.BEERDB_TOKEN || config.BEERDB_TOKEN,
      type: 'brewery',
      q: breweryName
    }
  };
  return rp(options).then(log).then(returnFirst);
};

module.exports.searchBreweryIDbreweryDB = searchBreweryIDbreweryDB;


//example reply
/*{
    "currentPage": 1,
    "numberOfPages": 1,
    "totalResults": 1,
    "data": [
        {
            "id": "WDrFlD",
            "name": "Asheville Brewing Company",
            "nameShortDisplay": "Asheville",
            "description": "Asheville’s third craft brewery opened in 1998 as a mash-up pizza joint, second-run movie theater, and brewpub, all wrapped up in a bright, happy, family-friendly space. The brewpub’s popularity with both locals and visitors enabled a second location, including a 15-barrel brew house, to open in downtown Asheville in 2006. Asheville Brewing installed Western North Carolina’s first in-house canning line in 2011. The Merrimon Avenue mothership’s original 7-barrel system recently joined the Coxe Avenue brewery, consolidating all brewing operations under one roof. The brew crew produced 6,200 barrels of beer in 2015, up from 1,200 barrels in 2011. Asheville Brewing Company’s flagship and one-off brews are distributed in 12-ounce cans, on draft, and in special release 22-ounce bottles throughout Western North Carolina, Charlotte, and in a few other North Carolina cities.",
            "website": "http://www.ashevillebrewing.com/",
            "established": "1998",
            "isOrganic": "N",
            "images": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/brewery/WDrFlD/upload_NOtbmn-icon.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/brewery/WDrFlD/upload_NOtbmn-medium.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/brewery/WDrFlD/upload_NOtbmn-large.png",
                "squareMedium": "https://s3.amazonaws.com/brewerydbapi/brewery/WDrFlD/upload_NOtbmn-squareMedium.png",
                "squareLarge": "https://s3.amazonaws.com/brewerydbapi/brewery/WDrFlD/upload_NOtbmn-squareLarge.png"
            },
            "status": "verified",
            "statusDisplay": "Verified",
            "createDate": "2012-01-03 02:41:44",
            "updateDate": "2016-06-29 17:11:14",
            "isMassOwned": "N",
            "brandClassification": "craft"
        }
    ],
    "status": "success"
}*/