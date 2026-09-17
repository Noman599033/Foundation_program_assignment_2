import { useState } from "react";

const MovieCard = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const poster = movie.image?.medium || "No Image";
    const title = movie.name;
    const rating = movie.rating?.average || "N/A";
  
    const year = movie.premiered ? movie.premiered.substring(0, 4) : "Unknown";

    const summary = movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : "No description available.";
    const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(", ") : "N/A";


    return (
        <>
        
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-black">
        <img
          src={poster}
          alt={title}
          className="w-full h-[350px] object-cover"
        />

        {/* Movie Info */}
        <div className="p-4 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 flex justify-between items-center">
            <div className="">
              <i className="fa-solid fa-star text-yellow-400"></i> {rating}
            </div>
            <i className="fa-solid fa-circle text-xs"></i>
            <div className="">
              <i className="fa fa-calendar"></i> {year}
            </div>
          </p>

          {/* We will make this button open the modal in the next step */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
          >
            See Details
          </button>
        </div>
      </div>

{isModalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-white text-black rounded-lg max-w-2xl w-full max-h-[95vh] overflow-y-auto relative flex flex-col shadow-2xl">
                        <div className="flex justify-end p-2 bg-white">
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-red-500 p-2 font-bold"
                            >
                                <i className="fa-solid fa-x text-sm mx-1"></i>
                            </button>
                        </div>
                        
                        <div className="w-full h-[250px] md:h-[350px] border-y border-gray-300">
                            {/* We use object-cover so the vertical poster acts like a horizontal backdrop! */}
                            <img src={poster} alt={title} className="w-full h-full object-cover object-top" />
                        </div>
                        
                        {/* 3. Modal Text Info */}
                        <div className="p-6 flex flex-col bg-white">
                            <h2 className="text-2xl font-bold mb-2">{title}</h2>
                            
                            {/* Rating and Release */}
                            <div className="text-gray-700 mb-6 font-semibold flex items-center gap-6">
                                <span><i className="fa-solid fa-star text-yellow-400"></i> Rating: {rating}</span>
                                <span className="text-gray-300">|</span>
                                <span><i className="fa-solid fa-calendar text-rose-500"></i> Release: {year}</span>
                                <span className="text-gray-300">|</span>
                                <span><i className="fa-solid fa-masks-theater text-amber-600"></i> Genre: {genres}</span>
                            </div>
                            
                            {/* Overview */}
                            <h4 className="font-bold text-lg mb-1">Overview:</h4>
                            <p className="text-gray-700 mb-8 leading-relaxed max-h-[150px] overflow-y-auto">
                                {summary}
                            </p>
                            
                            {/* 4. Bottom Close Button [ X Close ] */}
                            <div className="flex justify-end mt-auto">
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-red-600 text-white border border-red-500 font-bold py-2 px-4 rounded cursor-pointer"
                                >
                                    <i className="fa-solid fa-x text-white-500 mr-1"></i> Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default MovieCard;