import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './firebase'
import 'firebase/app'
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render(
  <Suspense fallback={'Cargando la app . . .'}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseAppProvider>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
