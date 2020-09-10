import axios from "axios";

const date = new Date();
date.setDate(date.getDate() - 15);

const SEARCH_EARTH_DAY = date.toISOString().slice(0, 10);

export default {
  getImages: function () {
    return axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" +
        SEARCH_EARTH_DAY +
        "&api_key=W88zUy8oVKPENZbR0pEupi9Jbjjr4xVqFm1ZLaba"
    ).catch((error)=>{
      if (error.response.status === 404){
        throw new Error("No Rover Photos to Display");
      }
      throw error;
      });
    
    }
  };

