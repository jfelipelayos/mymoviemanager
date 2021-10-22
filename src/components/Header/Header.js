import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="header">
            <Link to="/">
                <div className="header-left-info">
                    <img className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/mymoviemanager-jfelipelayos.appspot.com/o/Logo.png?alt=media&token=f0b343c0-6174-4c2b-a396-1a5913709846" alt="Logo de My Movie Manager" />
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
