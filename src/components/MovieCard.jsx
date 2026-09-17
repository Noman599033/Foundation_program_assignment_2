import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const poster = movie.image?.medium || "No Image";
  const title = movie.name;
  const rating = movie.rating?.average || "N/A";

  const year = movie.premiered ? movie.premiered.substring(0, 4) : "Unknown";

  const summary = movie.summary ?? "No description available.";
  const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(", ") : "N/A";

  return (
    <>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col text-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-yellow-400 border border-gray-700 hover:border-gray-600">
        <img
          src={poster}
          alt={title}
          className="w-full h-[350px] object-cover"
        />


        <div className="p-4 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 flex justify-between items-center text-sm">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star text-yellow-400"></i> {rating}
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-calendar"></i> {year}
            </span>
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto border border-yellow-400 cursor-pointer text-yellow-400 font-bold py-3 px-4 rounded hover:bg-yellow-400 hover:text-gray-900 transition-colors w-full"
          >
            See Details
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gray-800 text-white rounded-xl max-w-2xl w-full max-h-[95vh] overflow-y-auto relative flex flex-col shadow-2xl border border-gray-700">
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-black/60 hover:bg-red-500 cursor-pointer text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <i className="fa-solid fa-x text-sm"></i>
              </button>
            </div>

            <div className="w-full h-[250px] md:h-[350px]">
              <img src={poster} alt={title} className="w-full h-full object-cover object-top rounded-t-xl" />
            </div>

            <div className="p-6 flex flex-col bg-gray-800 rounded-b-xl">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>

              <div className="text-gray-300 mb-6 font-medium flex flex-wrap items-center gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2"><i className="fa-solid fa-star text-yellow-400"></i> Rating: {rating}</span>
                <span className="text-gray-600 hidden md:inline">|</span>
                <span className="flex items-center gap-2"><i className="fa-regular fa-calendar text-rose-400"></i> Release: {year}</span>
                <span className="text-gray-600 hidden md:inline">|</span>
                <span className="flex items-center gap-2"><i className="fa-solid fa-masks-theater text-amber-500"></i> {genres}</span>
              </div>

              <h4 className="font-bold text-lg mb-2 text-yellow-400">Overview:</h4>
              <div
                ref={(el) => {
                  if (el) el.innerHTML = `${summary}`;
                }}
                className="text-gray-300 mb-8 max-h-[150px] overflow-y-auto pr-2"
              />

              <div className="flex justify-end mt-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-700 hover:bg-red-600 cursor-pointer text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-600"
                >
                  Close
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