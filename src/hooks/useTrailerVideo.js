import { useDispatch } from "react-redux";
import { addBackgroundMovie } from "../utils/nowplayingSlice";
import { NOW_PLAYING } from "../utils/constants";
import { useEffect } from "react";


export const useTrailerVideo  = (videoId) =>{

    const dispatch = useDispatch();
    const getMovieOnID = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ videoId +"/videos" , NOW_PLAYING);
        const json = await data.json();
        const filter_movie = json.results.filter(res => res.type === "Trailer");
        const movie = filter_movie.legnth == 0 ? json?.results[0] : filter_movie[0];
        // push this background palying movie to store 
        dispatch(addBackgroundMovie(movie.key));

    }
    useEffect(() =>{
        getMovieOnID();
    },[]);   
}