import axios from "axios";
const SOL_DATE =  "1000"



export default {
  getImages: function () {
    return axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+SOL_DATE+"&api_key=DEMO_KEY"
    );
  },
};
