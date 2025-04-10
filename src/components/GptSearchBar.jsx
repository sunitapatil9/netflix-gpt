import React, { useRef } from 'react';
import client from '../utils/openai';
import { NOW_PLAYING } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTmdbMoviesList } from '../utils/GptSlice';

const GptSearchBar = () => {
    const query = useRef(null);
    const dispatch = useDispatch();

    const SearchMovie = async(movie) =>{
        //this API call is for tmdb movies
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", NOW_PLAYING);  
        const json = await data.json();
        return json.results;
    }
    const handleOpenaiSearchResults = async() =>{
        // console.log(query.current.value);
        const gpt_query = 'Act as Movie Recommendation system and suggest some movies for the query : '+ query.current.value +
         '.only give me a name of 5 movies,comma separated like the example results given head Example : koi mil gaya, golmal,animal,pushpa,kfg ';
        // const response = await client.responses.create({
        //     model: 'gpt-4o',
        //     instructions: 'You are a coding assistant that talks like a pirate',
        //     input: gpt_query,
        //   });
          
        //   console.log(response.output_text);
        //   the above APi is not working beacuse i have used many time so giving static movie list;
        const gptmovieList = "Chupke Chupke , Padosan, Chalti Ka Naam Gaadi , Gol Maal , Andaz Apna Apna";
        const  moviearrayList = gptmovieList.split(",");

        const promisemovies = moviearrayList.map((movie) => SearchMovie(movie));

        const movies = await Promise.all(promisemovies);
        // console.log(movies);
        dispatch(addTmdbMoviesList({moviesName : moviearrayList , moviesList : movies }))
    }
    return (
        <div className='flex justify-center pt-30' >
            <div className='bg-black rounded-lg'>
                <form className='px-4 py-4 md:grid md:grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                    <input className="px-4 py-2 col-span-10 text-white border-2 rounded-lg" ref={query} type='text' placeholder='Which movie are you going to watch today?'/>
                    <button className='ml-5 px-4 col-span-2 py-2 text-white bg-red-700 rounded-lg cursor-pointer' onClick={handleOpenaiSearchResults}>Search</button>
                </form>
            </div>
        </div>
    );
};

export default GptSearchBar;


// rfc
