import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name :"gpt",
    initialState :{
        isShowGptpage : false,
        moviesNames :null,
        moviesList : null,
    },
    reducers:{
        addGptSearchPage :(state) =>{
            state.isShowGptpage  = !state.isShowGptpage;
        },
        addTmdbMoviesList : (state,action) =>{
            const {moviesName, moviesList} = action.payload;
            state.moviesNames = moviesName;
            state.moviesList = moviesList;
        }
    }
})



export const { addGptSearchPage, addTmdbMoviesList } = GptSlice.actions;
export default GptSlice.reducer;