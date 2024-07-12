import { createSlice } from "@reduxjs/toolkit";
import { adminLogin, getUsers } from "./adminThunk";

const INITIAL_STATE = {
  jwttoken: localStorage.getItem("admin-token")
    ? JSON.parse(localStorage.getItem("admin-token"))
    : false,
  users: [],
  filterusers:[]
  
};

const adminSlice = createSlice({
  name: "admin",
  initialState: INITIAL_STATE,
  reducers: {
    adminLout: (state) => {
      state.jwttoken = false;
      localStorage.removeItem("admin-token");
    },
    serachUser: (state, action) => {},
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
        console.log('getting users',userList)
        state.users = userList;
      });
  },
});

export const { adminLout, serachUser } = adminSlice.actions;

export default adminSlice.reducer;
