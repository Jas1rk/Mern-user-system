import { createSlice } from "@reduxjs/toolkit";
import { loginVerify, editProfile } from "./userThunk";

const INITIAL_STATE = {
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    logout: (state) => {
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginVerify.fulfilled, (state, action) => {
        const { userData, token } = action.payload;
        state.userData = userData;
        state.token = token;
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("token", JSON.stringify(token));
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        const { username, email, mobile, image } = action.payload;
        state.userData.username = username;
        state.userData.email = email;
        state.userData.mobile = mobile;
        if (image) {
          state.userData.image = image;
        }
        state.editConfirm = true;
        localStorage.setItem("userData", JSON.stringify(state.userData));
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
