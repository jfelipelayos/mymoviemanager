import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../Cards/MovieCard/MovieCard'
import './Watched.css'
import '../MainView/MainView.css'


function Watched() {
    const { watched } = useContext(GlobalContext)

    return (
        <div className='main-container'>
            <div className="main-container-info">
                <h2 className='main-container-title' data-testid="mainview-watched-title">Peliculas vistas

                </h2>
                <h3>{watched.length}</h3>
            </div>
            {
                watched.length > 0 ? (
                    <div className="main-container-movies">
                        {
                            watched.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} type="watched" />
                            ))
                        }
                    </div>
                ) : (
                    <h3>Lista vacia</h3>
                )
            }

        </div>
    )
}

export default Watched
