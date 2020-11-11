import React, { FC } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useStyles from './useStyles';

interface ThemeSwitchProps {
  toggleDarkTheme: () => void;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ toggleDarkTheme }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FormControlLabel
        control={<Switch onChange={toggleDarkTheme} />}
        label="Switch themes"
      />
    </div>
  );
};

export default ThemeSwitch;
