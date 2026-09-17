const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-yellow-400">Movie Explorer</h2>
                    <p className="text-gray-400 mt-2 text-sm">
                        &copy; 2026 Movie Explorer. All rights reserved.
                    </p>
                </div>
                
                <div className="flex gap-6 text-2xl text-gray-400">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;