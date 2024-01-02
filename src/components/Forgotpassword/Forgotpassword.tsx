import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear the input field after submitting a valid email
    setEmail('');
    // Clear the error message when a valid email is submitted
    setEmailError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="">
        <img
          src="https://media.istockphoto.com/id/1306827906/vector/man-forgot-the-password-concept-of-forgotten-password-key-account-access-blocked-access.jpg?s=612x612&w=0&k=20&c=67nYr3ztbOn5uO6-mWBNCSw9mcHD9Z5M-QER-azGQ5w="
          className="w-1/2"
          alt=""
        />
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-1xl font-bold mb-2 text-blue-600" htmlFor="email">
                Enter your email and we'll send you a link to reset your Password
              </label>
              <input
                className="shadow appearance-none border rounded w-4/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="example@example.com"
              />
              {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                className=" bg-blue-700 text-white w-40 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              <p className="">Back to login </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
