const Navbar = () => {
    return (
        <div className="sticky top-0">
            <nav className="bg-gray-900 border text-white">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    <div>
                        <h1 className="text-2xl font-bold flex items-center">
                            <i className="fa-solid fa-clapperboard text-orange-400"></i>
                            <a href="/" className="ml-2 hover:text-orange-400 transition-colors">
                                MovieExplorer
                            </a>
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="/" className="font-medium px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-200">
                            Home
                        </a>

                        <a href="/movies" className="font-medium px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-200">
                            Movies
                        </a>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;