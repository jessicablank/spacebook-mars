import axios from "axios";

export default {
  getForecast: function () {
    return axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    );
  },
};
