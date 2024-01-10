import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { IauthUser } from "../../../models/IauthTipes";
import {
  register,
  logout,
  fecthCurrentUser,
  login,
} from "../actionCreators/AuthActionCreators";
import { registerResponceDataType } from "../../../models/credentialTipes";

export interface AuthState {
  user: IauthUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string;
}
const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<registerResponceDataType>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        register.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
        }
      )
      .addCase(
        login.fulfilled.type,
        (state, action: PayloadAction<registerResponceDataType>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(login.rejected.type, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled.type, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fecthCurrentUser.pending.type, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        fecthCurrentUser.fulfilled.type,
        (state, action: PayloadAction<IauthUser>) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addCase(
        fecthCurrentUser.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isRefreshing = false;
          state.error = action.payload;
        }
      ),
});
const authtPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
export const authSliceConfigReducer = persistReducer(
  authtPersistConfig,
  authSlice.reducer
);
