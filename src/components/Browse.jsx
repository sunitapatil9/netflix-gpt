import Header from "./Header";
import { useEffect } from "react";
import {addNowPlayMovies}  from "../utils/nowplayingSlice";
import { useNowPlaying } from "../hooks/useNowPlaying"

const Browse = () =>{

    useNowPlaying();

    return(
        <div>
            <Header />
        </div>
    )
}

export default Browse;