import React from 'react';
import { useSelector } from 'react-redux';
import { VedioTitle } from './VedioTitle';
import { VedioBackground } from './VedioBackground';

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) {
    // Return some loading or empty state JSX here.
    return <div>Loading...</div>; // You can customize this message.
  }

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;


  return (
    <div className="pt-[30%]  md:pt-0">
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground movieId = {id} />
    </div>
  );
};
