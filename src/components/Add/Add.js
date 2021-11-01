import React, { useState } from 'react'
import './Add.css'
import MovieResultCard from '../Cards/MovieResultCard/MovieResultCard'


function Add() {
    const [movieName, setMovieName] = useState('');
    const [searchResult, setSearchResult] = useState([])


    const handleInputChange = (event) => {
        event.preventDefault();
        setMovieName(event.target.value);

        if (event.target.value !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=782b46af1610e427a7b9a1b5203d8228&language=en-MX&page=1&include_adult=false&query=${event.target.value}`).then(res => res.json()).then(data => {
                if (!data.errors) {
                    setSearchResult(data.results);
                } else {
                    setSearchResult([])
                }
            })
        } else {
            setSearchResult([])
        }
    }
    return (
        <div className="add">
            <input
                className="add-input"
                type="text"
                placeholder="Busca una pelicula"
                value={movieName}
                onChange={handleInputChange}
                data-testid="add-input"
            />
            {
                searchResult.length > 0 && (
                    <ul className="add-results">
                        {searchResult.map(movie => (
                            <li key={movie.id} className="add-results-item">
                                <MovieResultCard movie={movie} />
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Add
