const API_KEY = "67428a44b35dc950e222d3c6e351df4d"
const BASE_URL = "https://api.themoviedb.org/3" 

export const getPopularMovies = async () => {
     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
     const  data = await response.json()
     return data.results    
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
         query
    )}`
 )
    const  data = await response.json()
    return data.results    
}
