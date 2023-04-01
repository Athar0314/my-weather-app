import "./App.css";
import CurrentWeather from "./Component/current-weather/currentweather";
import Search from "./Component/search";
import { WEATHER_API_URL, API_KEY } from "./Component/api";
import { useState } from "react";
import Forecast from "./forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponce = await response[0].json();
        const forecastResponce = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponce });
        setForecast({ city: searchData.label, ...forecastResponce });
      })
      .catch((err) => console.log(err));
  };
  console.log("weather", currentWeather);
  console.log("forecast", forecast);

  return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
