import { createAsyncThunk } from "@reduxjs/toolkit";
import { delContact, filterContacts, postContact, requestContacts } from "api";

export const getAllContactsThunk = createAsyncThunk('contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = requestContacts();
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  });


export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async () => {
    const response = await postContact();
    return response.data;
  }
);


export const delContactThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, thunkAPI) => {
    try {
      const response = await delContact(id);
      return response;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const filterContactThunk = createAsyncThunk(
  'contacts/delContact',
  async (query) => {
    const response = await filterContacts(query);
    return response.data;
  }
);