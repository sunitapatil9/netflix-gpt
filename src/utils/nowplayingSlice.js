import { createSlice } from "@reduxjs/toolkit";


const nowplayingSlice = createSlice({
    name :"movies",
    initialState:{
        nowplaymovies: null,
        tailerVideo:null,
        popularmovies : null,
        topratedmovies :null,
        upcomingmovies :null,
    },
    reducers :{
        addNowPlayMovies :(state,action) =>{
            state.nowplaymovies = action.payload;
            // console.log(current(state));
        },
        addBackgroundMovie : (state,action) =>{
            state.tailerVideo = action.payload;
        },
        addPopularMovies :(state,action) => {
            state.popularmovies = action.payload;
        },
        addTopRatedMovies : (state, action) =>{
            state.topratedmovies = action.payload;
        },
        addUpcomingMovies :(state, action) =>{
            state.upcomingmovies = action.payload;
        }
    }
})

export const {addNowPlayMovies , addBackgroundMovie, addPopularMovies , addTopRatedMovies , addUpcomingMovies} = nowplayingSlice.actions;

export default nowplayingSlice.reducer;