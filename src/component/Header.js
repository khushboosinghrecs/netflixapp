import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { auth } from '../utills/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utills/userSlilce'
import {logo} from '../utills/constant'
const Header = () => {
  const auth = getAuth();
  const user = useSelector(store => store.user)
const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
 const unsubscribe=   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    // unssubscribe when component will be unmounted
    return () => unsubscribe();
  }, [])
  const handleSignOut = () => {
    signOut(auth).then(() => {
      }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
     <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
      {user && (<div className='flex p-2'>
        <img className='w-12 h-12'
          src={user?.photoURL} alt='logo' />
        <button onClick={handleSignOut} className='text-white '>Sign Out</button>

      </div>)
      }
    </div>
  )

}
export default Header;
