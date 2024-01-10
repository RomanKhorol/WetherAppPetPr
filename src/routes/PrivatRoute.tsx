import { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import { Navigate } from "react-router-dom";
type privateRouteProps = {
  component: React.ComponentType;
  redirectTo: string;
};
export const PrivateRoute: FC<privateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isSteelRefreshing = useAppSelector((state) => state.auth.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isSteelRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
