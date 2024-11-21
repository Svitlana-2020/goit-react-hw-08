import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { selectContacts } from './selectors';
import { selectFilter } from '../filters/selectors';
// import { addContact } from "../../redux/actions";
const initialState = {
    items: [],
    loading: false,
    error: null,
};

const slice = createSlice({
    name: "contactSlice",
    initialState,
   extraReducers: 
   builder => builder
   
   .addCase(fetchContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   
   .addCase(fetchContacts.fulfilled, (state, {payload}) => {
    state.loading = false;
    state.items = payload;
})

.addCase(fetchContacts.rejected, (state, {payload}) => {
    state.loading = false;
    state.error = payload;
    state.items = [];
})

.addCase(addContact.pending, (state) => {
    state.loading = true;
    state.error = null;
})

.addCase(addContact.fulfilled, (state, {payload}) => {
    state.loading = false;
    state.items.push(payload);
})

.addCase(addContact.rejected, (state, {payload}) => {
    state.loading = false;
    state.error = payload;
    state.items = [];
})

.addCase(deleteContact.pending, (state) => {
    state.loading = true;
    state.error = null;
    })

.addCase(deleteContact.fulfilled, (state, {payload}) => {
    state.loading = false;
    state.items = state.items.filter(({id})=>
        id !== payload
    )})

.addCase(deleteContact.rejected, (state, {payload}) => {
    state.loading = false;
    state.items = [];
    state.error = payload;
})
})

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.name.toLowerCase()) ||
            contact.phone.includes(filter.number)
        );
    }
)

export const ContactsReducer = slice.reducer;

