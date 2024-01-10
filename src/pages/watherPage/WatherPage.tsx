import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/redusers/actionCreators/AuthActionCreators";
import { LocationSetter } from "../../components/locationSetter/LocationSetter";
const WatherPage: FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.auth.user.name);
  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Wather Page</h1>
      <h2>Walcome to your Wather Service, {name}</h2>
      <button type="button" onClick={logOut}>
        LogOut
      </button>
      <LocationSetter />
    </div>
  );
};
export default WatherPage;
