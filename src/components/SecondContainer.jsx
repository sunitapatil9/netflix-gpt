import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () =>{
    const moviesList = useSelector((store) => store.movies.nowplaymovies);

    if(!moviesList) return;
    return(
        <div className="bg-black">
            <div className="-mt-44 relative z-20">
                <MovieList title={"Now Playing"} movies={moviesList} />
                <MovieList title={"Top Rated"} movies={moviesList} />
                <MovieList title={"Comedy"} movies={moviesList} />
                <MovieList title={"Horror"} movies={moviesList} />
            </div>
        </div>

    )
}
export default SecondContainer;