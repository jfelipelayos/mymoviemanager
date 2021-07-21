import React, { useState } from 'react'
import Main from './components/Main/Main'
import Auth from './components/Auth/Auth'
import './App.css';
import { useFirebaseApp, useUser } from 'reactfire'


function App() {

  const [view, setView] = useState('home')
  const [session, setSession] = useState(false)

  const { data: user } = useUser();

  const changeView = (newView) => {
    setView(newView);
  }

  return (
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
  );
}

export default App;
