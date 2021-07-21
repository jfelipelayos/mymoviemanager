import React from 'react'
import './Navigation.css'

function Navigation({ view, changeView }) {

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li
                    className={`nav-list-item ${view === 'home' ? 'active-view' : ''}`}
                    onClick={() => changeView('home')}>
                    <i className="fas fa-ticket-alt"></i>
                </li>
                <li
                    className={`nav-list-item ${view === 'rankings' ? 'active-view' : ''}`}
                    onClick={() => changeView('rankings')}>
                    <i className="fas fa-trophy"></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
