import React from 'react';
import GererArticle from './components/GererArticle';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="center-container">
        <GererArticle />
      </div>
    </Provider>
  );
}

export default App;
