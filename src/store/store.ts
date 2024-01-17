import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { authSliceConfigReducer } from "../store/redusers/slices/AuthSlice";
import { weatherReduser } from "./redusers/slices/HourlyWeatherSlice";
import { threeDaysWeatherReduser } from "./redusers/slices/ThreeDaysSlice";
const rootReduser = combineReducers({
  auth: authSliceConfigReducer,
  weather: weatherReduser,
  threedaysWeather: threeDaysWeatherReduser,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};
export const store = setupStore();
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
