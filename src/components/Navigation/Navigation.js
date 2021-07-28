import React from 'react'
import './Navigation.css'

function Navigation({ view, changeView }) {

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li
                    className={`nav-list-item ${view === 'watchlist' ? 'active-view' : ''}`}
                    data-testid='navigation-watchlist'
                    onClick={() => changeView('watchlist')}>
                    <i className="fas fa-eye"></i>
                </li>
                <li
                    className={`nav-list-item ${view === 'watched' ? 'active-view' : ''}`}
                    data-testid='navigation-watchedlist'
                    onClick={() => changeView('watched')}>
                    <i className="fas fa-ticket-alt"></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
