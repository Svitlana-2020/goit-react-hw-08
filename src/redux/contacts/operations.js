import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";

axios.defaults.baseURL = 'https://6730b98b66e42ceaf1613478.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/FetchAll', async (_, thunkApi)=> {
try {
    const {data} = await authInstance.get("/contacts")
    return data;
} catch (err) {
    return thunkApi.rejectWithValue(err.message)
}
})

export const addContact = createAsyncThunk ('contact/addContact', async (contact, thunkApi) => {
    try {
        const {data} = await authInstance.post('/contacts', contact)
        return data
    } catch (err) {
        return thunkApi.rejectWithValue(err.message) 
    }
})

export const deleteContact = createAsyncThunk ('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const {data} = await authInstance.delete(`/contacts/${id}`)
        return data.id;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message) 
    }
})