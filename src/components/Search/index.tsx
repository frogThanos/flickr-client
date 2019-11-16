import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { searchActions } from '../../redux/actions';
import useStyles from './useStyles';

const Search: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchText: string = useSelector(({ searchReducer }: any) => searchReducer.searchText);
  const handleOnChange = (event: any) => {
    dispatch(searchActions.setSearchText(event.target.value));
  };
  return (
    <div className={classes.container}>
      <TextField
        label="Search for Flickr images!"
        className={classes.textField}
        onChange={handleOnChange}
      />
      <h1>{searchText}</h1>
    </div>
  );
};

export default Search;
