import React, { FC } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { store } from './redux';

import Search from './components/Search';
import Photos from './components/Photos';
import Pagination from './components/Pagination';
import LoadingIndicator from './components/LoadingIndicator';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <LoadingIndicator />
        <Search />
        <Photos />
        <Pagination />
      </div>
    </Provider>
  );
};

export default App;
