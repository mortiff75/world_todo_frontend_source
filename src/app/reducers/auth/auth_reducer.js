import { createSlice } from "@reduxjs/toolkit";
import {
  changeFormStatus,
  checkAuthTokenUserAction,
  loginUserAction,
  logoutUserAction,
  registerUserAction,
  updateFormByUser,
} from "./auth_actions";
import { toast } from "react-toastify";

const initialState = {
  inputs: { email: "", password: "", username: "" },
  user: undefined,
  error: undefined,
  isLoading: false,
  isLogin: false,
  success: false,
  isAuthorize: localStorage.getItem("user"),
};

const reducer = {
  updateForm: updateFormByUser,
  changeFormLogin: changeFormStatus,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: reducer,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...action.payload.data };
        state.isLogin = true;
        state.success = true;
        toast.success(`Registered ${state.user.username} Successfuly`);
      })
      .addCase(registerUserAction.rejected, (state, action) => {
        state.error = action.payload.message;
        state.isLoading = false;
        state.success = false;
        toast.error(state.error);
      })
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        console.log(action);

        state.isLoading = false;
        state.success = true;

        state.user = { ...action.payload.data };
        state.isAuthorize = state.user;
        toast.success(`Welcome ${state.user.username}`);
      })
      .addCase(loginUserAction.rejected, (state, action, value) => {
        state.isLoading = false;
        state.error = action.payload.message;
        toast.error(state.error);
        console.log(action.payload);
      })
      .addCase(checkAuthTokenUserAction.fulfilled, (state, action) => {
        state.user = { ...action.payload };
      })
      .addCase(checkAuthTokenUserAction.rejected, (state, action) => {
        state.error = action.payload.message;
        toast.error(state.error);
      })
      .addCase(logoutUserAction.fulfilled, (state, action) => {
        state.isAuthorize = undefined;
        state.user = undefined;
        toast.success("Logout Successfully");
      })
      .addCase(logoutUserAction.rejected, (state, action) => {
        state.error = action.payload?.message;
        toast.error(state.error);
      });
  },
});

export const { updateForm, changeFormLogin } = authSlice.actions;
export const authReducer = authSlice.reducer;
