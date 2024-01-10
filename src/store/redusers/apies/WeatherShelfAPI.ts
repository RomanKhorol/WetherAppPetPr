import { WeatherCard } from "../../../models/weatherCard";
import { instance } from "../../../components/axios";

export async function fetchDailyWather(сity: string) {
  const response = await instance.get<WeatherCard[]>(
    `forecast?units=metric&cnt=3&appid=8cd1ba80129ab6d6f764d984754a7016&q=${сity}`
  );
  return response.data;
}
