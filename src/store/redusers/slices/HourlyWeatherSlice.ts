import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherList } from "../../../models/weatherCard";
import { weatherFetchAction } from "../actionCreators/WeatherActionCreateo";
import { logout } from "../actionCreators/AuthActionCreators";

interface WeatherState {
  weatherData: WeatherList;
  isRefreshing: boolean;
  error: string;
}

const initialState: WeatherState = {
  weatherData: {
    city: { name: "" },
    list: [],
  },
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
        (state, action: PayloadAction<WeatherList>) => {
          state.weatherData = action.payload;
          state.isRefreshing = false;
          state.error = "";
        }
      )
      .addCase(
        weatherFetchAction.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.weatherData = {
            city: { name: "" },
            list: [],
          };
          state.isRefreshing = false;
          state.error = action.payload;
        }
      )
      .addCase(logout.fulfilled.type, (state) => {
        state.weatherData = {
          city: { name: "" },
          list: [],
        };
        state.isRefreshing = false;
        state.error = "";
      }),
});

export const weatherReduser = weatherSlice.reducer;
