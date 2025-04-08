import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () =>{
    const moviesList = useSelector((store) => store.movies);
    // console.log(moviesList);
    return(
        // moviesList && ( 
        <div className="bg-black">
            <div className="-mt-44 relative z-20">
                <MovieList title={"Now Playing"} movies={moviesList.nowplaymovies} />
                <MovieList title={"Popular Movies"} movies={moviesList.popularmovies} />
                <MovieList title={"Top Rated Movies"} movies={moviesList.topratedmovies} />
                <MovieList title={"Upcoming Movies "} movies={moviesList.upcomingmovies} />
            </div>
        </div>
        // )
    )
}
export default SecondContainer;