import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../Service/baseUrl";

export const registration = async ({
  username,
  email,
  mobile,
  password,
  confirmPassword,
  toast,
}) => {
  username = username.trim();
  (email = email.trim()), (mobile = mobile.trim());
  password = password.trim();
  confirmPassword = confirmPassword.trim();

  const usernameRegex = /^[a-zA-Z\s]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  if (
    username === "" ||
    email === "" ||
    mobile === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    toast.error("Please fill all the fields");
  } else if (!usernameRegex.test(username)) {
    toast.error(
      "Username must be 3 to 20 characters long and can only contain letters"
    );
  } else if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email");
  } else if (!mobileRegex.test(mobile)) {
    toast.error("Please enter a valid mobile number");
  } else if (password.length < 6) {
    toast.error("Password must be 6 characters long");
  } else if (password !== confirmPassword) {
    toast.error("Password and Confirm Password must be same");
  } else {
    const response = await axios.post(`${serverUrl}/register`, {
      username,
      email,
      mobile,
      password,
    });
    if (response.data === "userExist") {
      toast.error("User already exist");
    } else {
      toast.success("Registation completed");
      return "success";
    }
  }
};

export const loginVerify = createAsyncThunk(
  "user/loginVerify",
  async ({ email, password, toast }, { rejectWithValue }) => {
    email = email.trim();
    password = password.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
      toast.error("Please fill all the fields");
      return rejectWithValue("Please fill all the fields");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return rejectWithValue("Please enter a valid email");
    } else {
      const response = await axios.post(`${serverUrl}/login`, {
        email,
        password,
      });
      if (response.data === "passwordIncorrect") {
        toast.error("Password is incorrect");
        return rejectWithValue("Password is incorrect");
      } else if (response.data === "userNotExist") {
        toast.error("User does not exist");
        return rejectWithValue("User does not exist");
      } else {
        return response.data;
      }
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (
    { formData, username, email, mobile, image, toast },
    { rejectWithValue }
  ) => {
    try {
      username = username.trim();
      email = email.trim();
      mobile = mobile.trim();

      const usernameRegex = /^[a-zA-Z\s]{3,20}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[6-9]\d{9}$/;

      if (username === "" || email === "" || mobile === "") {
        toast.error("Please fill all the fields");
        return rejectWithValue("Please fill all the fields");
      } else if (!usernameRegex.test(username)) {
        toast.error(
          "Username must be 3 to 20 characters long and can only contain letters"
        );
        return rejectWithValue(
          "Username must be 3 to 20 characters long and can only contain letters"
        );
      } else if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email");
        return rejectWithValue("Please enter a valid email");
      } else if (!mobileRegex.test(mobile)) {
        toast.error("Please enter a valid mobile number");
        return rejectWithValue("Please enter a valid mobile number");
      } else {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.post(`${serverUrl}/edit`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
      return rejectWithValue(error.message);
    }
  }
);
