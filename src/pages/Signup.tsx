import React, { useState } from 'react';

import PasswordStrengthBar from 'react-password-strength-bar';

export default function Signup() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="m-auto flex min-h-full max-w-max flex-1 flex-col justify-center rounded-lg border border-[#EEEEEE] px-6 py-12 shadow-xl lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex align-bottom">
            <img
              className="h-11 w-auto"
              src="logo-dark.svg"
              alt="Your Company"
            />
            <h1 className="text-blue ms-2 text-3xl font-bold">Stack</h1>
          </div>
          <h2 className="mt-5 text-xl font-semibold leading-9 tracking-tight text-gray-900">
            Sign up to join with Stack
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-[#D6BBFB] placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-[#F4EBFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              {/* <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-[#D6BBFB] placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:focus:ring-[#F4EBFF] sm:text-sm sm:leading-6"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
                <PasswordStrengthBar
                  password={inputValue}
                  minLength={5}
                  scoreWords={[]}
                  shortScoreWord={''}
                  // onChangeScore={(score, feedback) => {
                  //   console.log(score, feedback);
                  // }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-iris text-md flex w-full justify-center rounded-md px-3 py-2 font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-md mt-6 text-start font-medium text-[#B0B7C3]">
            Already have an account?{' '}
            <a
              href="#"
              className="text-md font-medium text-[#377DFF] hover:text-[rgb(55,125,255)]"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
