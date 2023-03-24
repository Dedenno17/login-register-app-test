import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// Reducers
import registerReducer from './slices/register';

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
