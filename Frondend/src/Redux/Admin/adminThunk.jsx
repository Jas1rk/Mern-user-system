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

export const deletUser = createAsyncThunk(
  "admin/deletUser",
  async ({ userid, toast }) => {
    const response = await adminApi.delete(`/delete`, { data: { userid } });
    if (response.data.deletedCount === 1) {
      toast.success("User Deleted Successfully");
      return userid;
    }
  }
);


export const  editUser = createAsyncThunk("admin/editUser", async({userid,username,email,mobile,toast},{rejectWithValue}) => {
   username = username.trim()
   email = email.trim()
   mobile = mobile.trim()

   const usernameRegex = /^[a-zA-Z\s]{3,20}$/;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const mobileRegex = /^[6-9]\d{9}$/;


   if(username === "" || email === "" || mobile === ""){
    toast.error("Please fill all the fields");
    return rejectWithValue("Please fill all the fields");
   }else if(!usernameRegex.test(username)){
    toast.error("Username must be 3 to 20 characters long and can only contain alphab")
    return rejectWithValue("Username must be 3 to 20 characters long and can only contain alph")
   }else if(!emailRegex.test(email)){
    toast.error("Please enter a valid email")
    return rejectWithValue("Please enter a valid email")
   }else if(!mobileRegex.test(mobile)){
    toast.error("Please enter a valid mobile number")
    return rejectWithValue("Please enter a valid mobile number")
   }else{
    const response = await adminApi.put(``)
   }
})
