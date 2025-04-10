import { BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";

const GptSearchPage = () =>{
    return(
        <div className="">
            <div className="absolute -z-10 h-screen">
                <img className="bg-gradient-to-t  from-black" src={BACKGROUND_IMAGE}
                alt="background image"/>
            </div>
            <GptSearchBar />
            <GptSearchResults />
        </div>
    )
}

export default GptSearchPage;