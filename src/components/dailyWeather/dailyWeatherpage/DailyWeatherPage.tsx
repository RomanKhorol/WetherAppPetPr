import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import DailyWeatherItem from "../dailyWeatherItem/DaylyWeatherItem";

const DailyWeatherPage: FC = () => {
  const { threeDaysWeatherData, error } = useAppSelector(
    (state) => state.threedaysWeather
  );
  const city = threeDaysWeatherData.location.name;
  const weatherList = threeDaysWeatherData.forecast.forecastday;
  return (
    <>
      {(weatherList.length > 0 || !error) && (
        <div>
          <ul>
            {weatherList.length > 0 && (
              <h2>Weather for three days in {city}</h2>
            )}

            {weatherList.map((object) => {
              return <DailyWeatherItem key={object.date} object={object} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default DailyWeatherPage;
