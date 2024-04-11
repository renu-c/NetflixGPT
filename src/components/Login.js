import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidateData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firbase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // validate the form Data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className=" ">
      <Header />
      <div className="flex justify-center h-screen bg-cover bg-black bg-opacity-75 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')]">
        <div className="items-center sm:p-4 md:p-10 lg:p-12 xl:p-10  self-center text-white bg-black p-10 right-0 left-0 bg-opacity-80">
          <form onSubmit={(e) => e.preventDefault()} className="">
            <h1 className=" font-bold py-4 text-3xl">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-2 my-2 w-full bg-gray-500"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-2 my-2 w-full bg-gray-500"
            />

            <input
              ref={password}
              type="text"
              placeholder="Password"
              className="p-2 my-2 w-full  bg-gray-500 "
            />
            <p className="text-red-500 font-bold py-1">{errorMessage}</p>
            <button
              className="p-2 rounded-lg  my-4 w-full
              bg-red-700"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? "New to Netflix ? Sign Up Now"
                : "Alredy Registered ? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
