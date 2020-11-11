import React, { FC, useState } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { store } from './redux';

import Search from './components/Search';
import Photos from './components/Photos';
import Pagination from './components/Pagination';
import LoadingIndicator from './components/LoadingIndicator';
import ThemeSwitch from './components/ThemeSwitch';

const App: FC = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };
  // @ts-ignore
  const muiTheme = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <div className="App">
          <CssBaseline />
          <LoadingIndicator />
          <ThemeSwitch toggleDarkTheme={toggleDarkTheme} />
          <Search />
          <Photos />
          <Pagination />
        </div>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
