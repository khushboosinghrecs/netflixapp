import { useSelector } from "react-redux"
import { MovieList } from "./MovieList"


export const SecondaryContainer = () => {
  const movie = useSelector(store => store.movies)

  return (
    movie.nowPlayingMovies && (
      <div className="bg-black">
               <div className=" mt-0 md:-mt-20 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movie.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movie.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movie.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movie.nowPlayingMovies} />
        </div>
      </div>)
  )
}
