import  { useEffect } from 'react';
import { API_OPTiONS } from '../utills/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies } from '../utills/moviesSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTiONS);
    const json = await data.json()
    dispatch(addPopularMovies(json.results));
 
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])
  
}
export default usePopularMovies;
