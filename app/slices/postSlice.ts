import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

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
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    setEntry: (state, action) => {
      state.userEntry = action.payload;
    }
  }
})

export const createPost = createAsyncThunk('post/createPost', async (userEntry) => {
  const response = await axios.post('http://localhost:3000/api/post', { post: userEntry});
  console.log(response);
  return response;
})

export const { setPrompt, setEntry } = postSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

export default postSlice.reducer;