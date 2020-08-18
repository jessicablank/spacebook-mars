import React, { Component } from "react";
import insightAPI from "..utils/insightAPI"
const axios = require("axios");


class ForecastTable extends Component {
    //sets the "table"
    state = {
      todayForecast: [],
      allForecast: [],
    };
  
    componentDidMount() {
      this.getForecast();
    }
  
    getForecast = () => {
      API.getForecast()
  
        .then((res) => {
          this.setState({
            todayForecast: res.data.results,
            allForecast: res.data.results,
          });
        })
        .catch((error) => console.log(error));
    };
  
renderPage(){
    console.log(res.data.results)

}
render() {
    return this.renderPage();
  }

}

export default ForecastTable;