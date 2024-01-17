import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import "animate.css";
import { LocationSetter } from "../../locationSetter/LocationSetter";
import WeatherHourlyItem from "../hourlyWeatherItem/HourlyWeatherItem";

const HourlyWeatherPage: FC = (): JSX.Element => {
  const { weatherData, error } = useAppSelector((state) => state.weather);

  const city = weatherData.city.name;
  const weatherList = weatherData.list;
  let date = new Date();
  const currentDate = date.toISOString().slice(0, 10).replace("T", " ");
  return (
    <>
      {error && <p>{error}</p>}
      {(weatherList.length > 0 || !error) && (
        <div className="animate__animated animate__animate__backInUp">
          <ul>
            {weatherList.length > 0 && (
              <h2>
                Weather for three hours in {city} for {currentDate}:
              </h2>
            )}
            {weatherList.map((object) => {
              return <WeatherHourlyItem key={object.dt} object={object} />;
            })}
          </ul>
        </div>
      )}
      <LocationSetter />
    </>
  );
};
export default HourlyWeatherPage;
