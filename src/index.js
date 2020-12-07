import store from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {

   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App appState={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
         </React.StrictMode>
      </BrowserRouter>, document.getElementById('root')
   );
}

rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);




reportWebVitals();
