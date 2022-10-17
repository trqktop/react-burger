import React from 'react';
import ReactDOM from 'react-dom/client';
import './venodor/normalize.css'
import './index.css';
import App from './components/App/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
