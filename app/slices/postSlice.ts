import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface postState {
  prompt: string,
  userEntry: string
}

const initialState: postState = {
  prompt: '',
  userEntry: ''
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  }
})

export const { } = postSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

export default postSlice.reducer;