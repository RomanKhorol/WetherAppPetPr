import { FC } from "react";
import { WeatherCard } from "../../../models/weatherCard";

interface WeatherDayItemProps {
  object: WeatherCard;
}

const WeatherHourlyItem: FC<WeatherDayItemProps> = (object): JSX.Element => {
  const { main, weather, dt_txt, wind } = object.object;
  const temp = Math.ceil(main.temp);
  const feelsLike = Math.ceil(main.feels_like);
  const iconPart = weather.map((item) => {
    return item.icon;
  });
  const iconDescription =
    weather.map((item) => {
      return item.description;
    }) + "";
  const image = "https://openweathermap.org/img/wn/" + iconPart + "@2x.png";
  const currentTime = dt_txt.slice(12, 19);
  const windSpeed = wind.speed;
  return (
    <div>
      <div>
        <p>Weather is actual at {currentTime}</p>
        <p>Temperature degree: {temp}</p>
        <p>Feels like: {feelsLike}</p>
        <p>Wind speed {windSpeed} meter/sec</p>
      </div>
      <div>
        <img src={image} alt={iconDescription} />
      </div>
    </div>
  );
};
export default WeatherHourlyItem;
