import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', countLike: 15 },
  { id: 2, message: 'It\'s my first post', countLike: 20 },
  { id: 3, message: 'blala', countLike: 2 }
]

let dialogs = [
  { id: 1, name: 'Igor' },
  { id: 2, name: 'Katya' },
  { id: 3, name: 'Vanya' },
  { id: 4, name: 'Roma' },
  { id: 5, name: 'Petsa' },
  { id: 6, name: 'Sanya' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra' },
  { id: 3, message: 'Yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
