import { POSTER_PATH } from "../utils/constants";

const MovieCard = ({posterpath}) =>{
    if(!posterpath) return null;
    return(
        <div className="w-46 mr-2">
            <img alt="now playing" src ={POSTER_PATH + posterpath}/>
        </div>
    )
}
export default MovieCard;