import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ResctrictedRoute } from "./routes/RestrictedRoute";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import { fecthCurrentUser } from "./store/redusers/actionCreators/AuthActionCreators";

const Register = lazy(() => import("./pages/register/Register"));
const Login = lazy(() => import("./pages/login/Login"));

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fecthCurrentUser());
  }, [dispatch]);
  const steelRefreshing = useAppSelector((state) => state.auth.isRefreshing);
  return steelRefreshing ? (
    <b>Refresh user ...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/register"
          element={<ResctrictedRoute component={Register} redirectTo="/" />}
        />
        <Route
          path="/login"
          element={<ResctrictedRoute component={Login} redirectTo="/" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
