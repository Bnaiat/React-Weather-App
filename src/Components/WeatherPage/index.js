import React, { useRef, useState } from "react";

import { getWeather } from "../../api";
import WeatherCard from "../WeatherCard";
import Search from "../Search";
import styles from "./WeatherPage.module.css";

function WeatherPage() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchValue = useRef("");

  const setCity = (e) => {
    e.preventDefault();
    setError("");
    setWeather();
    setLoading(true);
    getWeather(searchValue.current)
      .then((data) => setWeather(data))
      .catch(() => setError(`No Such City '${searchValue.current}'`))
      .finally(setLoading(false));
  };

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div className={styles.wrapper}>
            <Search searchValue={searchValue} setCity={setCity} />
            {!searchValue.current && <h1>Type City</h1>}
            {searchValue.current && error && <h1>{error}</h1>}
          </div>
          {weather && (
            <>
              <div className={styles.cityWrapper}>
                <h1>
                  {weather.city.name},{weather.city.country}
                </h1>
              </div>
              <div className={styles.gridWrapper}>
                {weather.list.map((item) => (
                  <WeatherCard key={item.dt} data={item} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
