import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state'
import { BrowserRouter } from 'react-router-dom';

// addPost('SamuraiJS.com')

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>
  </BrowserRouter>, document.getElementById('root')

);


reportWebVitals();
