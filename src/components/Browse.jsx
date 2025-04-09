import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRated } from "../hooks/useTopRated";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () =>{
    const gptsearch = useSelector((state) => state.gpt.isShowGptpage);

    useNowPlaying();
    usePopularMovies();
    useTopRated();
    useUpcomingMovies();

    return(
        <div>
            <Header />
            { gptsearch ? <GptSearchPage /> : 
                <>
                    <MainContainer />
                    <SecondContainer />
                </>
            }
        </div>
    )
}

export default Browse;