import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux"
import { Provider } from 'react-redux'

import App from './App/App';
import filteredGamesReducer from './Reducer/filteredGamesReducer';



// je maakt hier de store aan en geef je de reducer mee
const store = createStore(filteredGamesReducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* je geeft aan dat het het een store heeft */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
