import React from 'react'
import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home'
import Rankings from '../Rankings/Rankings'
import Header from '../Auth/Header/Header'

function Main({ view, changeView, setSession }) {
    return (
        <div>
            <Header setSession={setSession} />
            <Navigation view={view} changeView={changeView} />
            {
                view === 'home'
                    ? <Home />
                    : <Rankings />
            }
        </div>
    )
}

export default Main
