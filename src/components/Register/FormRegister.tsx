import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const FormRegister: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // global state
  const { isFetching } = useAppSelector((state) => state.register);

  // state of form
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [userType, setUserType] = useState<string>('');
  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);
  const [inValidForm, setInvalidForm] = useState<{
    errorStatus: Boolean;
    errorMessage: string;
  }>({ errorStatus: false, errorMessage: '' });

  // if ready to submit
  useEffect(() => {
    const validEmail = email.trim().length !== 0 && email.includes('@');
    const validPassword = password.trim().length !== 0;
    const validPhoneNumber =
      phoneNumber.trim().length !== 0 && phoneNumber.length >= 11;
    const validFirstName = firstName.trim().length !== 0;
    const validLastName = lastName.trim().length !== 0;
    const validUserType = userType.trim().length !== 0;

    const validForm =
      validEmail &&
      validPassword &&
      validPhoneNumber &&
      validFirstName &&
      validLastName &&
      validUserType;

    if (validForm) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [email, firstName, password, lastName, phoneNumber, userType]);

  // function submit
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = email.trim().length !== 0 && email.includes('@');
    const validPassword = password.trim().length !== 0;
    const validPhoneNumber =
      phoneNumber.trim().length !== 0 && phoneNumber.length >= 11;
    const validFirstName = firstName.trim().length !== 0;
    const validLastName = lastName.trim().length !== 0;
    const validUserType = userType.trim().length !== 0;

    const validForm =
      validEmail &&
      validPassword &&
      validPhoneNumber &&
      validFirstName &&
      validLastName &&
      validUserType;

    // if form is not valid
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
      !validFirstName &&
        setInvalidForm({
          errorStatus: true,
          errorMessage: 'First Name is Invalid',
        });
      !validLastName &&
        setInvalidForm({
          errorStatus: true,
          errorMessage: 'Last Name is Invalid',
        });
      !validPhoneNumber &&
        setInvalidForm({
          errorStatus: true,
          errorMessage: 'Phone Number is Invalid',
        });
      !validUserType &&
        setInvalidForm({
          errorStatus: true,
          errorMessage: 'Choose one, between Student or Professional',
        });
      return;
    }

    setInvalidForm({ errorStatus: false, errorMessage: '' });
    // crate body
    const body = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      userType,
    };

    // fetch with redux thunk
    register(dispatch, body);

    // navigate to login
    navigate('/auth/login');
  };

  return (
    <form
      className="w-full gap-10 flex flex-col items-center"
      onSubmit={submitHandler}
    >
      {/* INPUT */}
      <div className="w-full flex">
        {/* FORM LEFT */}
        <div className="w-1/2 flex flex-col gap-8 pr-8 border-r-[0.5px] border-r-lightGrey">
          {/* EMAIL */}
          <div className="w-full h-[26%] flex flex-col gap-2">
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
          <div className="w-full h-[26%] flex flex-col gap-2">
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

          {/* PHONE NUMBER */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-lg text-darkGrey">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+62xxxxxxxxxxx"
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>
        </div>

        {/* FORM RIGHT */}
        <div className="w-1/2  flex flex-col gap-8 pl-8 border-l-[0.5px] border-l-lightGrey">
          {/* FIRST NAME */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="firstName" className="text-lg text-darkGrey">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* LAST NAME */}
          <div className="w-full h-[26%] flex flex-col gap-2">
            <label htmlFor="lastName" className="text-lg text-darkGrey">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2 border-[1px] border-lightGrey rounded-md outline-none"
            />
          </div>

          {/* USER TYPE */}
          <div className="w-full h-[26%] flex items-start justify-between">
            <div className="w-[45%] flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <input
                  type="radio"
                  name="userType"
                  id="student"
                  value="Student"
                  className="absolute w-full h-full bg-darkGrey cursor-pointer"
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
              <label htmlFor="student" className="text-lg text-darkGrey">
                I'm a Student
              </label>
            </div>
            <div className="w-[55%] flex items-center gap-3">
              <div className="w-8 h-8 relative">
                <input
                  type="radio"
                  name="userType"
                  id="professional"
                  value="Professional"
                  className="absolute w-full h-full bg-darkGrey cursor-pointer"
                  onChange={(e) => setUserType(e.target.value)}
                />
              </div>
              <label htmlFor="professional" className="text-lg text-darkGrey">
                I'm a Professional
              </label>
            </div>
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
          className={`w-[45%] ${
            isReadyToSubmit ? 'bg-primaryRed' : 'bg-lighterGrey'
          } text-white text-lg font-semibold py-3`}
        >
          {isFetching ? 'Loading ...' : 'Sign Up'}
        </button>
        <span className="text-sm text-lightGrey">
          Already Have an Account?{' '}
          <Link to="/auth/login" className="text-sm text-darkGrey font-bold">
            Log In
          </Link>
        </span>
      </div>
    </form>
  );
};

export default React.memo(FormRegister);
