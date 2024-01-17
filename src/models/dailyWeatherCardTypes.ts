export interface ForecastDailyResponceType {
  location: LocationType;
  forecast: forecasType;
}
export interface forecasType {
  forecastday: ForecastItemyType[];
}
export interface ForecastItemyType {
  date: string;
  day: DayType;
}
export interface DayType {
  maxtemp_c: number;
  mintemp_c: number;
  maxwind_kph: number;
  condition: ConditionType;
}
export interface ConditionType {
  text: string;
  icon: string;
}
export interface LocationType {
  name: string;
  region: string;
  country: string;
}
