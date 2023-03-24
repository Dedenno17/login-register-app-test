import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // global state
  const { isFetching, error, currentUser } = useAppSelector(
    (state) => state.login
  );

  //   state of form
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);
  const [inValidForm, setInvalidForm] = useState<{
    errorStatus: Boolean;
    errorMessage: string;
  }>({ errorStatus: false, errorMessage: '' });

  // if ready to submit
  useEffect(() => {
    const validEmail = email.trim().length !== 0 && email.includes('@');
    const validPassword = password.trim().length !== 0;

    const validForm = validEmail && validPassword;

    if (validForm) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [email, password]);

  // function submit
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = email.trim().length !== 0 && email.includes('@');
    const validPassword = password.trim().length !== 0;

    const validForm = validEmail && validPassword;

    if (!validForm) {
      !validEmail &&
        setInvalidForm({
          errorStatus: true,
          errorMessage: 'Your email is Invalid',
        });
      !validPassword &&
        setInvalidForm({
          errorStatus: true,
          errorMessage: 'Your password is Invalid',
        });
      return;
    }

    // create body
    const body = {
      email,
      password,
    };

    // fetching with redux thunk
    login(dispatch, body);
  };

  //   if succes it will navigate to profile page
  useEffect(() => {
    if (currentUser && !error) {
      console.log(currentUser);
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, error]);

  return (
    <form
      className="w-full gap-14 flex flex-col items-center"
      onSubmit={submitHandler}
    >
      {/* INPUT */}
      <div className="w-full flex ">
        {/* FORM*/}
        <div className="w-full flex flex-col gap-8 ">
          {/* EMAIL */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-lg text-darkGrey">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-lg text-darkGrey">
              Set Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>
        </div>
      </div>

      {/* ERROR MESSAGE */}
      {inValidForm.errorStatus && (
        <span className="w-full text-center text-sm text-primaryRed font-bold">
          {inValidForm.errorMessage}
        </span>
      )}

      {/* BUTTON */}
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <button
          type="submit"
          className={`w-full ${
            isReadyToSubmit ? 'bg-primaryRed' : 'bg-lighterGrey'
          } text-white text-lg font-semibold py-3`}
        >
          {isFetching ? 'Loading ...' : 'Log In'}
        </button>
        <span className="text-sm text-lightGrey w-full flex items-center justify-between">
          <span>
            New to Xplore?{' '}
            <Link
              to="/auth/register"
              className="text-sm text-darkGrey font-bold"
            >
              Sign Up
            </Link>
          </span>
          <span>Forgot Password</span>
        </span>
      </div>
    </form>
  );
};

export default React.memo(LoginForm);
