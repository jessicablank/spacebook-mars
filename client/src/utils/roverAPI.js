import axios from "axios";

export default {
  getImages: function () {
    return axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-8-15&api_key=DEMO_KEY"
    );
  },
};
