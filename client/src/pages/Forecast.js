import React, { useEffect, useState } from "react";
import {INSIGHT_API} from "..utils/insightAPI"

function Forecast() {
  const [weather, setWeather] = useState([]);
  const [selectSol, setSelectSol] = useState(true);
  const [previous, setPrevious] = useState(false);
  const [metric, setMetric] = useState(true);


  useEffect(() => {
    //call to load API the first time
    const insightAPI = async () => {
      const weather = await fetch(INSIGHT_API).then((data) => data.json());
      console.log(weather);
      const marsWeather = weather.sol_keys.map((solKey) => {
        return {
          sol: solKey,
          maxTemp: weather[solKey].AT?.mx || "No Data",
          minTemp: weather[solKey].AT?.mn || "No Data",
          windSpeed: Math.round(weather[solKey].HWS?.av || 0),
          windDirectionDegrees:
            weather[solKey].WD?.most_common?.compass_degrees || 0,
          date: formatDate(new Date(weather[solKey].First_UTC)),
        };
      });
      setWeather(marsWeather);
      setSelectSol(marsWeather.length - 1);
      setLoading(false);
    };

    insightAPI();
  }, []);

  return(
    <>
    <CurrentData sol={weather[selectSol]} >
    </CurrentData>
    <Previous
          weather={weather}
          previous={previous}
          setPrevious={setPrevious}
          setSelectedSol={setSelectSol}
          isMetric={metric}
        />
    </>
  );
  }
  export default Forecast;