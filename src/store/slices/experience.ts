import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Experience } from '../../types';
import { RootState } from '../store';

interface InitialState {
  experiences: Experience[];
  isFetching: boolean;
  error: boolean;
}

const initialStateValue: InitialState = {
  experiences: [],
  isFetching: false,
  error: false,
};

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: initialStateValue,
  reducers: {
    experienceStart: (state) => {
      state.isFetching = true;
    },
    experienceFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getAllExperienceSuccess: (state, action: PayloadAction<Experience[]>) => {
      state.isFetching = false;
      state.error = false;
      state.experiences = action.payload;
    },
    adddExperienceSuccess: (state, action: PayloadAction<Experience>) => {
      state.isFetching = false;
      state.error = false;

      const newExperiences = [...state.experiences];
      newExperiences.push(action.payload);

      state.experiences = newExperiences;
    },
  },
});

export const experienceSliceActions = experienceSlice.actions;
export const SelectExperienceSlice = (state: RootState) => state.experience;
export default experienceSlice.reducer;
