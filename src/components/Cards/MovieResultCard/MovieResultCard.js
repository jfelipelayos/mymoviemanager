import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import './MovieResultCard.css'

function MovieResultCard({ movie }) {
    const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } = useContext(GlobalContext)


    let currentStoredMovie = watchlist.find(storedMovie => storedMovie.id === movie.id)
    let currentWatchedMovie = watched.find(watchedMovie => watchedMovie.id === movie.id)

    const currentStoredMovieDisabled = currentStoredMovie ? true : currentWatchedMovie ? true : false


    return (
        <div key={movie.id} className="movie-result-card">
            {movie.poster_path ? (
                <img className="movie-result-card-img" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ) : (
                <img className="movie-result-card-img" src={`https://www.uneplay.com/images/carousel/noimage_poster.png?_v=0.2.2`} alt='No hay poster' />
            )}

            <div className="movie-result-card-info">
                <h3>{movie.title} </h3>
                <span>{movie.release_date ? movie.release_date.substring(0, 4) : 'Sin fecha de lanzamiento'}</span>
                <p>Calificacion: <strong>{movie.vote_average}</strong></p>
                <div className="movie-result-card-info-controls">
                    <button
                        disabled={currentStoredMovieDisabled ? true : false}
                        style={currentStoredMovieDisabled ? { opacity: '0.3', cursor: 'initial' } : { opacity: '1' }}
                        onClick={() => addMovieToWatchlist(movie)}
                    >Añadir a pendientes</button>
                    <button disabled={currentStoredMovieDisabled ? true : false}
                        style={currentStoredMovieDisabled ? { opacity: '0.3', cursor: 'initial' } : { opacity: '1' }} onClick={() => addMovieToWatched(movie)}>Añadir a vistas</button>
                </div>
            </div>
        </div>
    )
}

export default MovieResultCard
