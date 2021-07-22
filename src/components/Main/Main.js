import React from 'react'
import Navigation from '../Navigation/Navigation'
import Watched from '../Watched/Watched'
import Watchlist from '../Watchlist/Watchlist'
import Header from '../Header/Header'
import Add from '../Add/Add'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Main({ view, changeView, setSession }) {
    return (
        <div>
            <Router>
                <Header setSession={setSession} />
                <Switch>
                    <Route exact path="/">
                        <div className="main-view">
                            <Navigation view={view} changeView={changeView} />
                            {
                                view === 'watchlist'
                                    ? <Watchlist />
                                    : <Watched />
                            }
                        </div>
                    </Route>
                    <Route exact path="/add">
                        <Add />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
