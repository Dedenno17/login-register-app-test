import { registerSliceActions } from './slices/register';

interface RegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  userType: string;
}

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
