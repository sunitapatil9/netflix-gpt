import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRated } from "../hooks/useTopRated";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";

const Browse = () =>{

    useNowPlaying();
    usePopularMovies();
    useTopRated();
    useUpcomingMovies()

    return(
        <div>
            <Header />
            <MainContainer />
            <SecondContainer />
        </div>
    )
}

export default Browse;