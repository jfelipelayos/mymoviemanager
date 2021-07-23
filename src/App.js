import React, { useState } from 'react'
import MainView from './components/MainView/MainView'
import './App.css';
import { GlobalProvider } from './context/GlobalState'


function App() {

  const [view, setView] = useState('watchlist')


  const changeView = (newView) => {
    setView(newView);
  }

  return (
    <GlobalProvider>
      <MainView view={view} changeView={changeView} />
    </GlobalProvider>
  );
}

export default App;
