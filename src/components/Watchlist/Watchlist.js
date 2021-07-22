import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../Cards/MovieCard/MovieCard'
import './Watchlist.css'
import '../Main/Main.css'


function Watchlist() {
    const { watchlist } = useContext(GlobalContext)

    return (
        <div className='main-container'>
            <h2 className='main-container-title'>Peliculas por ver</h2>
            {
                watchlist.length > 0 ? (
                    <div className="main-container-movies">
                        {
                            watchlist.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} type="watchlist" />
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

export default Watchlist
