import { createSlice } from '@reduxjs/toolkit';
import { getAllContactsThunk } from './thunks';
import { handleFulfield, handleFulfieldContacts, handlePending, handleRejected } from './hendlers';

export const initialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfieldContacts)
      .addMatcher((actions) => actions.type.endsWith('/fulfilled'), handleFulfield)
      .addMatcher((actions) => actions.type.endsWith('/pending'), handlePending)
      .addMatcher((actions) => actions.type.endsWith('/rejected'), handleRejected)
  },
});

export const contactsReducer = contactsSlice.reducer;
