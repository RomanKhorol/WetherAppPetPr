import axios from "axios";
export const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
export const instanceAuth = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});
export const instanceDailyWether = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
});
