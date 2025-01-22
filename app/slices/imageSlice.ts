import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface imageState {
  selectedUrl: string | null;
}

const initialState: imageState = {
  selectedUrl: null,
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setSelectedUrl: (state, action) => {
      state.selectedUrl = action.payload;
    },
  },
});

export const { setSelectedUrl } = imageSlice.actions;
export default imageSlice.reducer;