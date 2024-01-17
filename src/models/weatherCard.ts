interface mainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}
interface weatherType {
  description: string;
  icon: string;
}
interface windType {
  speed: number;
}

export interface WeatherCard {
  dt: number;
  main: mainType;
  weather: weatherType[];
  wind: windType;
  dt_txt: string;
}

interface CityType {
  name: string;
}
export interface WeatherList {
  city: CityType;
  list: WeatherCard[];
}
