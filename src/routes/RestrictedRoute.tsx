import { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router-dom";
type rectrictedRouteProps = {
  component: React.ComponentType;
  redirectTo: string;
};
export const ResctrictedRoute: FC<rectrictedRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
