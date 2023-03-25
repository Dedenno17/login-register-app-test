import { registerSliceActions } from './slices/register';
import { loginSliceActions } from './slices/login';
import { experienceSliceActions } from './slices/experience';

interface LoginBody {
  email: string;
  password: string;
}

interface RegisterBody extends LoginBody {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userType: string;
}

interface ExperienceBody {
  companyName: string;
  country: string;
  createdBy: string;
  start: string;
  end: null | string;
  currentJob: boolean;
  description: string;
}

// login thunk
export const login = async (dispatch: any, body: LoginBody) => {
  dispatch(loginSliceActions.loginStart());

  try {
    const res = await fetch(`${process.env.REACT_APP_LOGIN_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error();
    }

    const data = await res.json();

    dispatch(loginSliceActions.loginSuccess(data));
  } catch (err) {
    dispatch(loginSliceActions.loginFailure());
  }
};

// register thunk
export const register = async (dispatch: any, body: RegisterBody) => {
  dispatch(registerSliceActions.regisStart());

  try {
    const res = await fetch(`${process.env.REACT_APP_REGISTER_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error();
    }

    dispatch(registerSliceActions.regisSuccess());
  } catch (err) {
    dispatch(registerSliceActions.regisFailure());
  }
};

// get all experience
export const allExperience = async (dispatch: any) => {
  dispatch(experienceSliceActions.experienceStart());

  try {
    const res = await fetch(`${process.env.REACT_APP_ALLEXPERIENCE_API}`, {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    dispatch(experienceSliceActions.getAllExperienceSuccess(data));
  } catch (err) {
    dispatch(experienceSliceActions.experienceFailure());
  }
};

// get all experience
export const addExperience = async (dispatch: any, body: ExperienceBody) => {
  dispatch(experienceSliceActions.experienceStart());

  try {
    const res = await fetch(`${process.env.REACT_APP_ALLEXPERIENCE_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    dispatch(experienceSliceActions.getAllExperienceSuccess(data));
  } catch (err) {
    dispatch(experienceSliceActions.experienceFailure());
  }
};
