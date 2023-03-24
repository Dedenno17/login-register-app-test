import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  isFetching: boolean;
  error: boolean;
}

const initialStateValue: InitialState = {
  isFetching: false,
  error: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState: initialStateValue,
  reducers: {
    regisStart: (state) => {
      state.isFetching = true;
    },
    regisSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    regisFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const registerSliceActions = registerSlice.actions;
export const SelectRegister = (state: RootState) => state.register;
export default registerSlice.reducer;
