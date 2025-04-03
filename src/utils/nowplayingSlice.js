import { createSlice, current } from "@reduxjs/toolkit";


const nowplayingSlice = createSlice({
    name :"nowplaymovie",
    initialState:{
        nowplaymovies: null
    },
    reducers :{
        addNowPlayMovies :(state,action) =>{
            state.nowplaymovies = action.payload;
            console.log(current(state));
        }
    }
})

export const {addNowPlayMovies} = nowplayingSlice.actions;

export default nowplayingSlice.reducer;