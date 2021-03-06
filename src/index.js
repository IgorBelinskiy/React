import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import StoreContext, { Provider } from './StoreContext';


   ReactDOM.render(
      <BrowserRouter>
         {/* <React.StrictMode> */}
            <Provider store={store}>
               <App />
            </Provider>
         {/* </React.StrictMode> */}
      </BrowserRouter>, document.getElementById('root')
   );

reportWebVitals();
