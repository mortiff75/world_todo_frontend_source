import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUsecase,
  loginUsecase,
  checkAuthorizeUsecase,
  logoutUserUsecase,
} from "../../../utils/di";

export const updateFormByUser = (state, action) => {
  const { name, value } = action.payload;

  state.inputs = { ...state.inputs, [name]: value };
  state.error = undefined;
};

export const changeFormStatus = (state) => {
  state.isLogin = !state.isLogin;
};

export const checkAuthTokenUserAction = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkApi) => {
    try {
      const { result, isOk } = await checkAuthorizeUsecase.call({ token: "" });

      if (!isOk) throw result;
      console.log(result);

      return result;
    } catch (error) {
      return thunkApi.rejectWithValue({
        message: error?.message ?? error.toString(),
      });
    }
  }
);

export const registerUserAction = createAsyncThunk(
  "auth/register",
  async (_, thunkApi) => {
    try {
      const { result, isOk } = await registerUsecase.call({
        user: thunkApi.getState().auth.inputs,
      });
      console.log(result);

      if (!isOk) throw result;

      return result;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue({ message: error.message });
    }
  }
);

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (_, thunkApi) => {
    try {
      const { email, password } = thunkApi.getState().auth.inputs;

      const { result, isOk } = await loginUsecase.call({
        user: { email, password },
      });

      if (!isOk) throw result;
      console.log(result);

      localStorage.setItem(
        "user",
        JSON.stringify({ ...result.data, token: result.token })
      );

      return result;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue({ message: error.message });
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      const { result, isOk } = await logoutUserUsecase.call();

      if (!isOk) throw result;

      localStorage.removeItem("user");

      console.log(result);

      return result;
    } catch (error) {
      console.log(error);

      return thunkApi.rejectWithValue({
        message: error?.message ?? "Something went wrong",
      });
    }
  }
);
