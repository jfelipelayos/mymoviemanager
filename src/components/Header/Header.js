import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="header">
            <Link to="/">
                <div className="header-left-info">
                    <img className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/globant-bootcamp-project.appspot.com/o/Filmlerin%20(1).png?alt=media&token=687dc84d-a27b-4ced-ac7a-950b5aee66af" alt="Logo de My Movie Manager" />
                    <h1 className='header-title'>MyMovieManager</h1>
                </div>
            </Link>
            <Link to="/add">
                <button className="header-add-button">
                    <i className="fas fa-plus"></i>
                    Añadir
                </button>
            </Link>
        </header>
    )
}

export default Header
