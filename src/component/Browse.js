import React from 'react'
import Header from './Header'
import useNowPlayingMovies  from '../hook/useNowPlayingMovies'
import  {MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import usePopularMovies from '../hook/usePopularMovies';
const Browse = () => {
useNowPlayingMovies();
usePopularMovies()
  return (
<>
    <Header />
        <MainContainer />
        <SecondaryContainer />
      </>

  )
}

export default Browse