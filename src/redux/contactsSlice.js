import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    loadContacts(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact, loadContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
