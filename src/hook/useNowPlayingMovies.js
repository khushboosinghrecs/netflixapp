import  { useEffect } from 'react';
import { API_OPTiONS } from '../utills/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utills/moviesSlice'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTiONS);
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results));
    console.log(json)
    console.log(json.results)
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])
  
}
export default useNowPlayingMovies;
