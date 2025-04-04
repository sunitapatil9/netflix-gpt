import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../utils/nowplayingSlice";
import { NOW_PLAYING } from "../utils/constants";

export const useNowPlaying = () =>{
    const dispatch = useDispatch();

    const nowPlayingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", NOW_PLAYING);
        const json = await data.json();
        dispatch(addNowPlayMovies(json.results));
    }
    
    useEffect(() =>{
        nowPlayingMovies();
    },[])
}
