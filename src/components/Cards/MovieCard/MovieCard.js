import React from 'react'
import './MovieCard.css'
import MovieControls from '../../MovieControls/MovieControls'

function MovieCard({ movie, type }) {
    return (
        <div className="movie-card">
            <div className="movie-card-controls">
                {movie.poster_path ? (
                    <img className="movie-card-img" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ) : (
                    <img className="movie-card-img" src={`https://www.uneplay.com/images/carousel/noimage_poster.png?_v=0.2.2`} alt='No hay poster' />
                )}
                {
                    <MovieControls movie={movie} type={type} />
                }
            </div>
            <h3 className='movie-card-title'>
                {movie.title}
            </h3>
        </div>
    )
}

export default MovieCard
