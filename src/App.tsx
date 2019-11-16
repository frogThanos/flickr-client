import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Search from './components/Search';
import { store } from './redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Search />
      </div>
    </Provider>
  );
};

export default App;
