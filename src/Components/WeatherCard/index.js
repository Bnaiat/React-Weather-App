import React from "react";
import { PropTypes } from "prop-types";

import styles from "./WeatherCard.module.css";

function WeatherCard({ data }) {
  console.log(data);

  WeatherCard.propTypes = {
    data: PropTypes.object.isRequired,
  };
  return (
    <div className={styles.cardWrapper}>
      <h4>{data.dt_txt}</h4>
      <h1>{Math.round(data.main.temp)}°C</h1>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon"
      />
      <span>Wind: {data.wind.speed} km/h</span>
      <span>Visibility: {data.visibility / 1000} km</span>
      <span>Feels like: {data.main.feels_like}</span>
      <span>Humidity: {data.main.humidity}</span>
      <span>Pressure: {data.main.pressure}</span>
      <span></span>
    </div>
  );
}

export default WeatherCard;
