import React, { FC } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { store } from './redux';

import Search from './components/Search';
import Photos from './components/Photos';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Search />
        <Photos />
      </div>
    </Provider>
  );
};

export default App;
