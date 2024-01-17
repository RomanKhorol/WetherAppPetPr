import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ForecastDailyResponceType } from "../../../models/dailyWeatherCardTypes";
import { threeDaysFechungAction } from "../actionCreators/ThreeDaysFechingAction";
import { logout } from "../actionCreators/AuthActionCreators";

interface ThreeDaysWeatherState {
  threeDaysWeatherData: ForecastDailyResponceType;
  isRefreshing: boolean;
  error: string;
}

const initialState: ThreeDaysWeatherState = {
  threeDaysWeatherData: {
    location: {
      name: "",
      region: "",
      country: "",
    },
    forecast: {
      forecastday: [],
    },
  },
  isRefreshing: false,
  error: "",
};

export const threeDaysWeatherSlice = createSlice({
  name: "threeDaysWeather",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(threeDaysFechungAction.pending.type, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        threeDaysFechungAction.fulfilled.type,
        (state, action: PayloadAction<ForecastDailyResponceType>) => {
          state.threeDaysWeatherData = action.payload;
          state.isRefreshing = false;
          state.error = "";
        }
      )
      .addCase(
        threeDaysFechungAction.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.threeDaysWeatherData = {
            location: {
              name: "",
              region: "",
              country: "",
            },
            forecast: {
              forecastday: [],
            },
          };
          state.isRefreshing = false;
          state.error = action.payload;
        }
      )
      .addCase(logout.fulfilled.type, (state) => {
        state.threeDaysWeatherData = {
          location: {
            name: "",
            region: "",
            country: "",
          },
          forecast: {
            forecastday: [],
          },
        };
        state.isRefreshing = false;
        state.error = "";
      }),
});

export const threeDaysWeatherReduser = threeDaysWeatherSlice.reducer;
