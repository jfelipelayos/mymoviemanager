import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './MovieControls.css'

function MovieControls({ movie, type }) {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveMovieToWatched,
        removeMovieFromWatched
    } = useContext(GlobalContext)
    return (
        <div>
            {type === 'watchlist' && (
                <div className="movie-controls">
                    <button className="movie-control-btn" aria-label="Marcar Pelicula como vista" onClick={() => addMovieToWatched(movie)} >
                        <i className="fas fa-ticket-alt" aria-hidden="true"></i>
                    </button>
                    <button className="movie-control-btn" aria-label="Eliminar Pelicula de la lista" onClick={() => removeMovieFromWatchlist(movie)}>
                        <i className="fas fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            )}
            {type === 'watched' && (
                <div className="movie-controls">
                    <button className="movie-control-btn" aria-label="Marcar Pelicula como no vista" onClick={() => moveMovieToWatched(movie)} >
                        <i className="fas fa-eye-slash" aria-hidden="true"></i>
                    </button>
                    <button className="movie-control-btn" aria-label="Eliminar Pelicula de la lista" onClick={() => removeMovieFromWatched(movie)}>
                        <i className="fas fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            )}
        </div>
    )
}

export default MovieControls
