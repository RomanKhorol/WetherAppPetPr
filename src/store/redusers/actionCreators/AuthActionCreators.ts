import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  credentialsRegisterTipe,
  credentialsLoginTipe,
  registerResponceDataType,
} from "../../../models/credentialTipes";

import { IauthUser } from "../../../models/IauthTipes";
import { AuthState } from "../slices/AuthSlice";
import { instanceAuth } from "../../../components/axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string) {
    instanceAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceAuth.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk<
  registerResponceDataType,
  credentialsRegisterTipe,
  { rejectValue: string }
>("auth/register", async (credentials, thunkAPI) => {
  try {
    const { data } = await instanceAuth.post("/users/signup", credentials);

    token.set(data.token);

    return data;
  } catch (error) {
    let e = error as Error;
    Notify.failure(`${e}`);
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const login = createAsyncThunk<
  registerResponceDataType,
  credentialsLoginTipe,
  { rejectValue: string }
>("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await instanceAuth.post("/users/login", credentials);

    token.set(data.token);

    return data;
  } catch (error) {
    Notify.failure("Pleace register");
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await instanceAuth.post("/users/logout");
    token.unset();
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fecthCurrentUser = createAsyncThunk<
  IauthUser,
  undefined,
  { state: { auth: AuthState } }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Try again");
  }

  token.set(persistedToken);
  try {
    const { data } = await instanceAuth.get("/users/current");

    return data;
  } catch (error) {
    let e = error as Error;
    return thunkAPI.rejectWithValue(e.message);
  }
});
