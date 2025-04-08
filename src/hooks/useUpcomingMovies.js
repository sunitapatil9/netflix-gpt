import { useEffect } from "react";
import { NOW_PLAYING } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/nowplayingSlice";

export const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    
    const upcomingMovies = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" , NOW_PLAYING);
        const json  = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));

    }
    useEffect(() =>{
        upcomingMovies();
    })
}