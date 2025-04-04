import { createSlice, current } from "@reduxjs/toolkit";


const nowplayingSlice = createSlice({
    name :"movies",
    initialState:{
        nowplaymovies: null,
        tailerVideo:null
    },
    reducers :{
        addNowPlayMovies :(state,action) =>{
            state.nowplaymovies = action.payload;
            // console.log(current(state));
        },
        addBackgroundMovie : (state,action) =>{
            state.tailerVideo = action.payload;
        }
    }
})

export const {addNowPlayMovies,addBackgroundMovie} = nowplayingSlice.actions;

export default nowplayingSlice.reducer;