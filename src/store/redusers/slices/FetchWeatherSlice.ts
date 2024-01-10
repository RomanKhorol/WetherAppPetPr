import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherCard } from "../../../models/weatherCard";
import { weatherFetchAction } from "../actionCreators/WeatherActionCreateo";

interface WeatherState {
  weatherData: WeatherCard[];
  isRefreshing: boolean;
  error: string;
}

const initialState: WeatherState = {
  weatherData: [],
  isRefreshing: false,
  error: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(weatherFetchAction.pending.type, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        weatherFetchAction.fulfilled.type,
        (state, action: PayloadAction<WeatherCard[]>) => {
          state.weatherData = action.payload;
          state.isRefreshing = false;
        }
      )
      .addCase(
        weatherFetchAction.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isRefreshing = false;
          state.error = action.payload;
        }
      ),
});

export const weatherReduser =  weatherSlice.reducer;
