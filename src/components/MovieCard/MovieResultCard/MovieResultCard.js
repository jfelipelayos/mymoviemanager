import React from 'react'
import './MovieResultCard.css'

function MovieResultCard({ movie }) {
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
                    <button>Añadir a pendientes</button>
                    <button>Añadir a vistas</button>
                </div>
            </div>
        </div>
    )
}

export default MovieResultCard
