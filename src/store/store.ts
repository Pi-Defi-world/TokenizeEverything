
import { configureStore } from '@reduxjs/toolkit';
import dreamworldReducer from './dreamworldSlice';

export const store = configureStore({
  reducer: {
    dreamworld: dreamworldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
