import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// Reducers
import registerReducer from './slices/register';
import loginReducer from './slices/login';
import experienceReducer from './slices/experience';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    experience: experienceReducer,
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
