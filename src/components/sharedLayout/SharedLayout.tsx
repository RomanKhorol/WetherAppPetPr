import { FC, Suspense } from "react";
import { useAppSelector } from "../../hooks/redux";
import { NavLink, Outlet } from "react-router-dom";
import WatherPage from "../../pages/watherPage/WatherPage";
const SharedLayout: FC = () => {
  const isLogedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      <header>
        <div>
          {!isLogedIn && <b>Welcome to World-Wather service</b>}
          {!isLogedIn && <NavLink to="/register">Register</NavLink>}
          {!isLogedIn && <b>or</b>}
          {!isLogedIn && <NavLink to="/login">Login</NavLink>}

          {isLogedIn && <WatherPage />}
        </div>
      </header>
      <Suspense fallback={<b>Loading ...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
