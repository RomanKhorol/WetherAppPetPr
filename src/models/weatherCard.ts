interface mainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}
interface weatherType {
  icon: string;
}
interface windType {
  speed: number;
}

export interface WeatherCard {
  main: mainType;
  weather: weatherType;
  wind: windType;
  dt_txt: string;
}
