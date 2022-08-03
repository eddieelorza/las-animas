import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App.jsx';
import './assets/tailwind.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import authentication from './utils/B2c';

// authentication.initialize();

// authentication.run(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
// serviceWorkerRegistration.unregister();
// });

