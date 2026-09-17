export const getAllShows = async () => {
    const url = `https://api.tvmaze.com/shows`;
    const result = await fetch(url);
    if (!result) {
        throw new Error("Failed to fetch all shows!");
    }
    const data = await result.json();
    return data;
}

export const getMovieInfo = async (movie) => {
    const url = `https://api.tvmaze.com/search/shows?q=${movie}`;
    const result = await fetch(url);
    if (!result) {
        throw new Error("Movie Search failed!");
    }
    const data = await result.json();
    return data.map(item => item.show);
}