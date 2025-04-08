import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/nowplayingSlice";
import { NOW_PLAYING } from "../utils/constants";

export const useTopRated = () =>{
    const dispatch = useDispatch();

    const topRatedMovies = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", NOW_PLAYING);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() =>{
        topRatedMovies();
    },[])
}