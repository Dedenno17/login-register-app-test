import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// Reducers
import registerReducer from './slices/register';
import loginReducer from './slices/login';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
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
