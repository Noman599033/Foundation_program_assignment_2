import { useEffect, useState } from "react";
import { getAllShows, getMovieInfo } from "../services/get-movieInfo";
import MovieCard from "../components/MovieCard";

const Movies = () => {

    const [searchMovie, setSearchMovie] = useState("");
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const fetchAllMovieList = async () => {
        setLoading(true);
        try {
            const movieList = await getAllShows();
            setMovies(movieList);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };


    useEffect(() => {
        const fetchAllMovieList = async () => {
            setLoading(true);
            try {
                const movieList = await getAllShows();
                setMovies(movieList);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchAllMovieList();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const value = searchMovie.trim();
        if (value === "") {
            fetchAllMovieList();
            return;
        }
        setLoading(true);

        try {
            const result = await getMovieInfo(searchMovie);
            setMovies(result);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <div className="mx-auto px-auto">

            <form action="" onSubmit={handleSubmit} className="my-10 flex justify-center px-4">
                <input
                    value={searchMovie}
                    onChange={(e) => setSearchMovie(e.target.value)}
                    className="border border-gray-700 bg-gray-800 text-white rounded-l-lg px-6 py-4 w-full max-w-lg focus:outline-none focus:border-yellow-400 placeholder-gray-400 transition-colors"
                    placeholder="Search for a movie..." type="text" name="" id="" />
                <button type="submit"
                    className="bg-yellow-400 cursor-pointer text-gray-900 px-8 py-4 rounded-r-lg font-bold hover:bg-yellow-300 transition-colors shadow-lg">
                    Search
                </button>
            </form>

            {loading ? (
                <h2 className="text-center text-2xl font-bold">Loading Movies...</h2>
            ) : (
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