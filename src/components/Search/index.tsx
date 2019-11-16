import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { searchActions, photosActions } from '../../redux/actions';
import useStyles from './useStyles';

const Search: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleOnChange = (event: any) => {
    dispatch(searchActions.setSearchText(event.target.value));
  };
  const handleOnClick = () => {
    console.log('handleOnClick');
    dispatch(photosActions.fetchPhotos());
  };
  return (
    <div className={classes.container}>
      <TextField
        label="Search for Flickr images!"
        className={classes.textField}
        onChange={handleOnChange}
      />
      <Button
        onClick={handleOnClick}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
