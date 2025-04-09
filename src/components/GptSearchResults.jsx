import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const GptSearchResults = () => {
    const {moviesNames , moviesList}  = useSelector((store) => store.gpt);
    if(!moviesNames) return null;
    return (
        <div> 
            <div className='bg-black from-bblack opacity-90'>
                {moviesNames.map((movie,index) => <MovieList key = {movie} title = {movie} movies={moviesList[index]}/>)}
                
            </div>
        </div>
    );
}

export default GptSearchResults;
