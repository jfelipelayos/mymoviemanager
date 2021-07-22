import React, { useState } from 'react'
import Main from './components/Main/Main'
import Auth from './components/Auth/Auth'
import './App.css';
import { GlobalProvider } from './context/GlobalState'
// import { useFirebaseApp, useUser } from 'reactfire'


function App() {

  const [view, setView] = useState('watchlist')
  const [session, setSession] = useState(false)

  // const { data: user } = useUser();

  const changeView = (newView) => {
    setView(newView);
  }

  return (
    <GlobalProvider>
      <div>
        {
          session && (
            <Main setSession={setSession} view={view} changeView={changeView} />
          )
        }
        {
          !session && (
            < Auth setSession={setSession} />
          )
        }
      </div>
    </GlobalProvider>
  );
}

export default App;
