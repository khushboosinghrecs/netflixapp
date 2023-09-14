import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utills/validate';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utills/firebase'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setIsErrorMessage] = useState(true);
  // state variable => useState || useref;
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleForm = () => {

    const message = checkValidate(email.current.value, password.current.value);
    setIsErrorMessage(message)
     if(message) return
    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    setIsErrorMessage(message);
    console.log(email.current.value, password.current.value)
  }
  // useRef used to reference to value
  return (
    <>
      <div className='absolute'>
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='logo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 relative bg-black p-12 my-34 mx-auto right-0 left-0  bg-opacity-70 rounded-lg'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input ref={email} type='text' placeholder='Email address' className=' text-sm p-2 my-2 bg-gray-70 w-full' />
        {!isSignInForm && <input type='password' placeholder='placeholder' className=' text-sm p-2 my-2 bg-gray-70 w-full' />}
        <input ref={password} type="password" placeholder='password' className='text-sm p-2 my-2 bg-gray-70 w-full' />
        <button className='p-4 my-4 bg-red-700 rounded-lg text-sm text-white' onClick={handleForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 text-red'>{errorMessage}</p>
        <p className='text-[14px] text-white' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign up now" : "Already Registered Sign In"}</p>
      </form>
    </>
  )
}

export default Login