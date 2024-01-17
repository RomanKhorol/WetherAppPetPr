import { createAsyncThunk } from "@reduxjs/toolkit";
import { ForecastDailyResponceType } from "../../../models/dailyWeatherCardTypes";
import { fetchWatherForThreeDays } from "../apies/WeatherShelfAPI";
export const threeDaysFechungAction = createAsyncThunk<
  ForecastDailyResponceType,
  string,
  { rejectValue: string }
>("dailyWeathe/fechingDailyWeather", async (data, { rejectWithValue }) => {
  try {
    const response = await fetchWatherForThreeDays(data);

    return response;
  } catch (error) {
    let e = error as Error;
    return rejectWithValue(e.message);
  }
});
