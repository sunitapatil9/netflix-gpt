import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../utils/nowplayingSlice";

export const useNowPlaying = () =>{
    const dispatch = useDispatch();

    const now_playing =  {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTc2MDQzYTM1MzgyZDg2MGE3MDEyZmRkMjhjYTRkNCIsIm5iZiI6MTc0MzY4NDM1Mi44NDYwMDAyLCJzdWIiOiI2N2VlODMwMGNmMDYxOTBjYmFlMWIyYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0GgJJI0_mNh9QovnqTF8kgtyFxH4uoipS2gaEQDd6oQ'
        }
      };

    const nowPlayingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", now_playing);
        const json = await data.json();
        console.log(json.results)
        dispatch(addNowPlayMovies(json.results));
    }
    
    useEffect(() =>{
        nowPlayingMovies();
    },[])
}
