import axios from "axios";

export default {
    getForecast: function () {
        return axios.get("https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0");
    }
}; 
 