import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])

    const addMovieToWatchlist = (movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
    }

    const removeMovieFromWatchlist = (movie) => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: movie.id })
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })
    }

    const moveMovieToWatched = (movie) => {
        dispatch({ type: 'MOVE_MOVIE_TO_WATCHLIST', payload: movie })
    }

    const removeMovieFromWatched = (movie) => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: movie.id })
    }

    return (
        <GlobalContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveMovieToWatched,
            removeMovieFromWatched
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
