import { createSlice } from "@reduxjs/toolkit";
import { adminLogin, getUsers } from "./adminThunk";

const INITIAL_STATE = {
  jwttoken: localStorage.getItem("admin-token")
    ? JSON.parse(localStorage.getItem("admin-token"))
    : false,
  userlist: [],
  filterusers: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState: INITIAL_STATE,
  reducers: {
    adminLout: (state) => {
      state.jwttoken = false;
      localStorage.removeItem("admin-token");
    },
    searchUser: (state, action) => {
      const name = action.payload.toLowerCase();
      state.filterusers = state.userlist.filter((user) =>
        user.username.toLowerCase().includes(name)
      );
    },
  },

  extraReducers: (builer) => {
    builer
      .addCase(adminLogin.fulfilled, (state, action) => {
        const newtoken = action.payload;
        state.jwttoken = newtoken;
        localStorage.setItem("admin-token", JSON.stringify(newtoken));
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const userList = action.payload;
        state.userlist = userList;
        state.filterusers = userList
      });
  },
});

export const { adminLout, searchUser } = adminSlice.actions;

export default adminSlice.reducer;
