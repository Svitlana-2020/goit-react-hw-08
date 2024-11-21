import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authInstance = axios.create({
    baseURL: 'https://connections-api.goit.global',
})

export const setToken = (token) => {
authInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    authInstance.defaults.headers.Authorization = '';
    };


export const ApiCreateUser = createAsyncThunk('auth/register', async (formData, thunkApi)=> {
try {
    const {data} = await authInstance.post("/users/signup", formData)
    console.log(formData)
    setToken(data.token)
    return data;
} catch (err) {
    return thunkApi.rejectWithValue(err.message)
}
})

export const ApiLogIn = createAsyncThunk('auth/login', async (formData, thunkApi)=> {
    try {
        const {data} = await authInstance.post("/users/login", formData)
        setToken(data.token)
        console.log(data.token)
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
    })

export const ApiLogOut = createAsyncThunk('auth/logout', async (_, thunkApi)=> {
    
        try {
            const {data} = await authInstance.post("/users/logout")
            clearToken ();
           
            return data;
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
        })

export const ApiRefreshUser = createAsyncThunk('auth/refresh', async (_, thunkApi)=> {
    const state = thunkApi.getState();
    const token = state.auth.token;
    

    if (token === null) {
        return thunkApi.rejectWithValue('invalid request')
    }

    try {
        setToken(token)
        const {data} = await authInstance.get("/users/current")
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
    })

// // export const ApiRefreshUser= createAsyncThunk('auth/refresh', async (_, thunkApi)=> {
// //             try {
// //                 const {data} = await axios.patch("/contacts/{contactId}")
// //                 return data;
// //             } catch (err) {
// //                 return thunkApi.rejectWithValue(err.message)
// //             }
// //             })
    


