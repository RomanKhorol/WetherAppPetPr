import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/redusers/actionCreators/AuthActionCreators";
import HourlyWeatherPage from "../../components/hourlyWeather/hourlyWeatherPage/HourlyWeatherPage";
import DailyWeatherPage from "../../components/dailyWeather/dailyWeatherpage/DailyWeatherPage";

const WatherPage: FC = () => {
  const dispatch = useAppDispatch();

  const { name } = useAppSelector((state) => state.auth.user);

  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Welcome to your Wather Service, {name}</h1>
      <DailyWeatherPage />
      <hr></hr>
      <HourlyWeatherPage />
      <button type="button" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};
export default WatherPage;
