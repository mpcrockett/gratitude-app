import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import imageReducer from './slices/imageSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    image: imageReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;