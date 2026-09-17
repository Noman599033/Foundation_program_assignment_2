const Hero = () => {
    return (
        <div className="bannerImg flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Discover Cinematic Magic</h1>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-200 drop-shadow-md">Dive into a vast collection of blockbuster hits, indie masterpieces, and timeless classics. Discover what to watch next and explore the world of movies like never before.</p>

            <a href="/movies" className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-yellow-300 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Explore Movies
            </a>
        </div>
    );
};

export default Hero;