const Navbar = () => {
    return (
        <div>
                     <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-bold">
                        <i class="fa-solid fa-clapperboard"></i>
                        <a href="/" className="ml-2 hover:text-yellow-400">
                         MovieExplorer 
                        </a> 
                    </h1>
                </div>

                <div className="flex items-center gap-6">
                    

                    <a href="/movies" className="hover:text-yellow-400">
                        Movies
                    </a>
                </div>

            </div>
        </nav>
        </div>
    );
};

export default Navbar;