import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherCard } from "../../../models/weatherCard";
import { fetchDailyWather } from "../apies/WeatherShelfAPI";

export const weatherFetchAction = createAsyncThunk<
  WeatherCard[],
  string,
  { rejectValue: string }
>("weather/fechingWeather", async (data, { rejectWithValue }) => {
  try {
    const response = await fetchDailyWather(data);

    return response;
  } catch (error) {
    let e = error as Error;
    return rejectWithValue(e.message);
  }
});
