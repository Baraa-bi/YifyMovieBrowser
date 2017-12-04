



export const movieModel = (movie) =>{

    let newMovie = {
        movieId:movie.id,
        movieTitle:movie.title,
        movieImage:movie.large_cover_image,
        movieRating:movie.rating,
        movieYear:movie.year
    }
    return newMovie
}