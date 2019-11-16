import React, { FC, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { searchActions, photosActions } from '../../redux/actions';
import useStyles from './useStyles';

const Search: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleOnChange = (event: any) => {
    dispatch(searchActions.setSearchText(event.target.value));
  };
  const OnKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      dispatch(photosActions.fetchPhotos());
    }
  };
  return (
    <div className={classes.container}>
      <TextField
        onKeyDown={OnKeyDown}
        label="Search for Flickr images!"
        className={classes.textField}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
