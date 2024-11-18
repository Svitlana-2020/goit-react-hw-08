import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authInstance = axios.create({
    baseURL: 'https://connections-api.goit.global',
})

export const setToken = (token) => {
authInstance.defaults.header.Authorization = 'Bearer:${token}';
};

export const clearToken = () => {
    authInstance.defaults.header.Authorization = "";
    };


export const ApiCreateUser = createAsyncThunk('auth/register', async (formData, thunkApi)=> {
try {
    const {data} = await axios.post("/users/signup", formData)
    return data;
} catch (err) {
    return thunkApi.rejectWithValue(err.message)
}
})

export const ApiLogIn = createAsyncThunk('auth/login', async (formData, thunkApi)=> {
    try {
        const {data} = await axios.post("/users/login", formData)
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
    })

export const ApiLogOut = createAsyncThunk('auth/logout', async (_, thunkApi)=> {
        try {
            const {data} = await axios.post("/users/logout")
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
        })

// export const ApiRefreshUser= createAsyncThunk('auth/refresh', async (_, thunkApi)=> {
//             try {
//                 const {data} = await axios.patch("/contacts/{contactId}")
//                 return data;
//             } catch (err) {
//                 return thunkApi.rejectWithValue(err.message)
//             }
//             })
    


