const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/api/forecast", (req, res) => {
    const queryString = "https://api.nasa.gov/insight_weather/?api_key="+process.env.API_KEY+"&feedtype=json";
    axios
      .get(queryString)
      .then(function (forecast) {
       console.log(forecast.data);
        const forecastDetails = forecast.data.items.map((weather)=>{
         
          return ({
            "id" : weather.id,
            "day" : weather.volumeInfo.title,
          })
        })
      
        res.json(forecastDetails)
      })
      .catch((err) => res.status(400).send(err));
  });
  
  module.exports = router;