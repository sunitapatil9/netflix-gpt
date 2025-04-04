import { useSelector } from "react-redux";
import VideoPlay from "./VideoPlay";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const moviesList = useSelector(store => store.movies.nowplaymovies);
    if(!moviesList) return; // when page loads initially we will not get movie list beacuse of that

    const {original_title , overview ,id} = moviesList[0];
    return(
        <div>
            <VideoTitle  title = {original_title} overview = {overview}/>
            <VideoPlay videoId = {id} />
        </div>
    )
}
export default MainContainer;