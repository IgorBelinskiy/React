import state, { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state'
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {

   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
         </React.StrictMode>
      </BrowserRouter>, document.getElementById('root')
   );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);




reportWebVitals();
