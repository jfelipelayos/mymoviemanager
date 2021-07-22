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
                    <button className="movie-control-btn" onClick={() => addMovieToWatched(movie)} >
                        <i className="fas fa-ticket-alt"></i>
                    </button>
                    <button className="movie-control-btn" onClick={() => removeMovieFromWatchlist(movie)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )}
            {type === 'watched' && (
                <div className="movie-controls">
                    <button className="movie-control-btn" onClick={() => moveMovieToWatched(movie)} >
                        <i className="fas fa-eye-slash"></i>
                    </button>
                    <button className="movie-control-btn" onClick={() => removeMovieFromWatched(movie)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )}
        </div>
    )
}

export default MovieControls
