import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";

export const item = (state) => state.contacts.items;
export const selectLoading=(state) => state.contacts.loading
export const selectError = (state) => state.contacts.error
export const selectFilterConsts = createSelector([item, selectNameFilter], (contacts, filter) => {
     return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
})