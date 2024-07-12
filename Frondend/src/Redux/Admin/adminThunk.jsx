import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../Service/baseUrl";
import adminApi from "../../Service/axiosInstance";

export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async ({ email, password, toast }, { rejectWithValue }) => {
    email = email.trim();
    password = password.trim();

    if (email === "" || password === "") {
      toast.error("Please fill all the fields");
      return rejectWithValue("Please fill all the fields");
    } else {
      const response = await axios.post(`${serverUrl}/admin/login`, {
        email,
        password,
      });
      if (response.data === "incorrectpass") {
        toast.error("Incorrect Password");
        return rejectWithValue("Incorrect Password");
      } else if (response.data === "incorrectemail") {
        toast.error("Incorrect Email");
        return rejectWithValue("Incorrect Email");
      } else {
        return response.data;
      }
    }
  }
);

export const getUsers = createAsyncThunk("admin/getUsers", async () => {
  const response = await adminApi.get(`/getuser`);
  return response.data;
});
