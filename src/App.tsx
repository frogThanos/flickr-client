import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Search from './components/Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Search />
    </div>
  );
};

export default App;
