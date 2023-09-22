import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
            console.log('nowPlayingMovies', state.nowPlayingMovies)
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
            console.log('trailerVideo', state.trailerVideo)
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
            console.log('popular Video', state.popularMovies)
          },
    }
});

export const { addNowPlayingMovies, addTrailerVideo ,addPopularMovies} = moviesSlice.actions
export default moviesSlice.reducer;