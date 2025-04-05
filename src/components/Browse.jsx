import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () =>{

    useNowPlaying();

    return(
        <div>
            <Header />
            <MainContainer />
            <SecondContainer />
        </div>
    )
}

export default Browse;