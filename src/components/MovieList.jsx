import MovieCard from "./MovieCard";

const MovieList =({title , movies}) =>{
    return(
        <div className="">
            <h1 className="text-xl md:text-3xl py-4 text-white pl-2">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                   { movies && movies.map((movie) => <MovieCard key={movie.id} posterpath ={movie.poster_path}/>)} 
                </div>
            </div>
        </div>
    )
}
export default MovieList;