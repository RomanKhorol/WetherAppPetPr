import React, { FC } from "react";
import { ForecastItemyType } from "../../../models/dailyWeatherCardTypes";

interface DailyWeatherItemProps {
  object: ForecastItemyType;
}
const DailyWeatherItem: FC<DailyWeatherItemProps> = (object): JSX.Element => {
  const { date, day } = object.object;
  const { maxtemp_c, mintemp_c, maxwind_kph, condition } = day;
  const { text, icon } = condition;

  return (
    <div>
      <ul>
        <li>
          <h2>{date}</h2>
        </li>
        <li>Max temerature {maxtemp_c} °C</li>
        <li>Min temperature {mintemp_c} °C</li>
        <li>Max wind speed {maxwind_kph} KpH</li>
        <li>
          <img src={icon} alt={text} />
        </li>
      </ul>
    </div>
  );
};
export default DailyWeatherItem;
