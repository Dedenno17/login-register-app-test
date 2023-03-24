import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialStateValue = {
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
    loginSuccess: (state, action: PayloadAction<any>) => {
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
