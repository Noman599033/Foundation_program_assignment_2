const Hero = () => {
    return (
        <div className="bannerImg flex flex-col items-center justify-center text-dark text-center">
            <h1 className="text-5xl font-bold mb-4">Discover Movies</h1>

            <p className="text-xl mb-8">Explore and discover your favorite movies from around the world.</p>

            <a href="/movies" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">Explore Movies</a>
    
    </div>
    );
};

export default Hero;