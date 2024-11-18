import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, FetchContacts } from './operations';
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
   
   .addCase(FetchContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   
   .addCase(FetchContacts.fulfilled, (state, {payload}) => {
    state.loading = false;
    state.items = payload;
})

.addCase(FetchContacts.rejected, (state, {payload}) => {
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


export const ContactsReducer = slice.reducer;



//    {
//         addContact: (state, action) => {
//             state.contacts.push(action.payload);
//         },
//         deleteContact: (state, action) => {
//             state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
//              },
//              },
//     });

    
  
//   // Експортуємо фабрики екшенів
//   export const { addContact, deleteContact} = slice.actions;
  
//   // Експортуємо редюсер слайсу
//   export default slice.reducer;