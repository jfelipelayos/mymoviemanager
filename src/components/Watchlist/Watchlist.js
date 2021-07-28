import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../Cards/MovieCard/MovieCard'
import './Watchlist.css'
import '../MainView/MainView.css'


function Watchlist() {
    const { watchlist } = useContext(GlobalContext)

    return (
        <div className='main-container'>
            <div className="main-container-info">
                <h2 className='main-container-title' data-testid="mainview-watch-title">Peliculas por ver</h2>
                <h3>{watchlist.length}</h3>
            </div>
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
