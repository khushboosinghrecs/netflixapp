import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utills/validate';
import { signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utills/firebase';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utills/userSlilce'
import {userURL} from '../utills/constant';

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setIsErrorMessage] = useState('');
  // state variable => useState || useref;
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleForm = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setIsErrorMessage(message)
    if (message) return
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
             photoURL: userURL
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
            setIsErrorMessage(error.message);
          });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
          navigate('/')
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
          navigate('/')
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
        {!isSignInForm && <input type='text' ref={name} placeholder='name' className=' text-sm p-2 my-2 bg-gray-70 w-full' />}
        <input ref={email} type='text' placeholder='Email address' className=' text-sm p-2 my-2 bg-gray-70 w-full' />
        <input ref={password} type="password" placeholder='password' className='text-sm p-2 my-2 bg-gray-70 w-full' />
        <p className='p-4 my-4 text-red-700'>{errorMessage}</p>
        <button className='p-4 my-4 bg-red-700 rounded-lg text-sm text-white' onClick={handleForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-[14px] text-white' onClick={toggleSignInForm}>{!isSignInForm ? "New to NetFlix? Sign up now" : "Already Registered Sign In"}</p>
      </form>

    </>
  )
}

export default Login