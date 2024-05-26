import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"
const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = ` ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
export  const register = createAsyncThunk("auth/register", async (value, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", value)
        setAuthHeader(response.data.token);
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const login = createAsyncThunk("auth/login", async (value, thunkAPI) => {
     try {
        const response = await axios.post("/users/login", value)
        setAuthHeader(response.data.token);
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
     try {
        await axios.post("/users/logout");
    clearAuthHeader();
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const refreshUser = thunkAPI.getState();
    setAuthHeader(refreshUser.auth.token);

    const response = await axios.get("/users/current");
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const refreshUser = thunkAPI.getState();
      return refreshUser.auth.token !== null;
    },
  }
);