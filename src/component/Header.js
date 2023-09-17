import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { auth } from '../utills/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utills/userSlilce'

const Header = () => {
  const auth = getAuth();
  const user = useSelector(store => store.user)
const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, [])
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate('/')
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full' >
      <div>
        <img className='w-44'
          src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      </div>
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
