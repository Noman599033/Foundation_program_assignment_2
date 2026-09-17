import { useEffect, useState } from "react";
import { getAllShows, getMovieInfo } from "../services/get-movieInfo";
import MovieCard from "../components/MovieCard";

const Movies = () => {

    const [searchMovie, setSearchMovie] = useState("");
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchAllMovieList = async() => {
            setLoading(true);
            try{
                const movieList = await getAllShows();
                setMovies(movieList);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };


    useEffect(() => {
        const fetchAllMovieList = async() => {
            setLoading(true);
            try{
                const movieList = await getAllShows();
                setMovies(movieList);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };

        fetchAllMovieList();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const value = searchMovie.trim();
        if (value === ""){
            fetchAllMovieList();
            return;
        }
        // console.log(value);
        setLoading(true);
        
        try{
           const result = await getMovieInfo(searchMovie);
           setMovies(result);
           console.log(result);
        }catch(error){
            console.log( error);
        }
        setLoading(false);
    }

    return (
        <div className="mx-auto px-auto">

            <form action="" onSubmit={handleSubmit} className="my-10 flex justify-center">
                <input 
                value={searchMovie}
                onChange={(e)=> setSearchMovie(e.target.value)}
                className=" border-2 border-gray-300 rounded-l-lg px-4 py-3 w-full max-w-lg focus:outline-none focus:border-blue-500 text-black" 
                placeholder ="Search for a movie..." type="text" name="" id="" />
                <button type="submit" 
                className="bg-blue-600 text-white px-8 py-3 rounded-r-lg font-bold hover:bg-blue-700">
                    Search
                </button>
            </form>

            {loading ? (
        <h2 className="text-center text-2xl font-bold">Loading Movies...</h2>
      ) : (
        /* CSS Grid: 1 column on mobile, 2 on small screens, 4 on desktop */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
            
        </div>
    );
};

export default Movies;