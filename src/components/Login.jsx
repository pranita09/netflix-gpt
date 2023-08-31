import { useState } from "react";
import { Header } from ".";

export const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80">
        <h1 className="text-3xl font-bold py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700"
        />
        <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already a member? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
