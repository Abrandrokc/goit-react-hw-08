import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";



const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
    error: null
    },
    extraReducers: (builder) => builder
        .addCase(fetchContacts.pending, (state) => { state.loading = true })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload
            state.loading = false
            state.error = false
        })
        .addCase(fetchContacts.rejected, (state) => {
            state.error = true
            
        })
        .addCase(addContact.pending, (state) => { state.loading = true })
        .addCase(addContact.fulfilled, (state,action) => {
            state.items.push(action.payload)
            state.loading = false
             
        })
        .addCase(addContact.rejected, (state) => {
            state.error = true
            state.loading = false
        })
        .addCase(deleteContact.pending, (state) => { state.loading = true })
        .addCase(deleteContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
           
            state.items.splice(index, 1);
            state.loading = false
        })
        .addCase(deleteContact.rejected, (state) => {
            state.error = true
            state.loading = false
        })

});




export default slice.reducer;


