import { WeatherList } from "../../../models/weatherCard";
import { instance, instanceDailyWether } from "../../../components/axios";
import { ForecastDailyResponceType } from "../../../models/dailyWeatherCardTypes";

export async function fetchDailyWather(сity: string) {
  const response = await instance.get<WeatherList[]>(
    `forecast?units=metric&cnt=3&appid=8cd1ba80129ab6d6f764d984754a7016&q=${сity}`
  );

  return response.data;
}
export async function fetchWatherForThreeDays(сity: string) {
  const response = await instanceDailyWether.get<ForecastDailyResponceType>(
    `forecast.json?key=d8a586df377d4c18926205727242501&days=3&q=${сity}`
  );
  console.log(response.data);
  return response.data;
}
