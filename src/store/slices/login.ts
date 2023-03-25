import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../types';

interface InitialState {
  currentUser: null | User;
  isFetching: boolean;
  error: boolean;
}

const initialStateValue: InitialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialStateValue,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const loginSliceActions = loginSlice.actions;
export const SelectLogin = (state: RootState) => state.login;
export default loginSlice.reducer;
