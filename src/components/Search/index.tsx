import React, { FC, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { searchActions, photosActions } from '../../redux/actions';
import useStyles from './useStyles';
import { RootStateInterface } from '../../redux/types';

const Search: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const hasError = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.hasError);

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
        required
        error={hasError}
        variant="outlined"
        helperText={hasError && "Whoops! Your request failed, please try again :("}
        onKeyDown={OnKeyDown}
        label="Search for Flickr images!"
        className={classes.textField}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
