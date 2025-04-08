import { useDispatch } from "react-redux";
import { NOW_PLAYING } from "../utils/constants"
import { addPopularMovies } from "../utils/nowplayingSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
        const dispatch = useDispatch();

        const popularMovies = async() =>{
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",NOW_PLAYING);
            const json = await data.json();
            // console.log(json.results)
            dispatch(addPopularMovies(json.results));
        }
        useEffect(() =>{
            popularMovies();
        },[])
        

}