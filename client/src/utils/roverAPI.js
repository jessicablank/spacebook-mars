import axios from "axios";
//Earth Date for API query needs to be formatted yyyy-mm-dd
//The Earth Date to match the Profile Page should be about 15 days behind the current day
const date = new Date();
date.setDate(date.getDate() - 15);

const SEARCH_EARTH_DAY = date.toISOString().slice(0, 10);

//console.log("Spacebook Date:" + SEARCH_EARTH_DAY);

export default {
  getImages: function () {
    return axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
        SEARCH_EARTH_DAY +
        "&api_key=DEMO_KEY"
    );
  },
};
