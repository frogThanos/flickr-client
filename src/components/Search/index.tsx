import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { searchActions } from '../../redux/actions';

const Search: FC = () => {
  const dispatch = useDispatch();
  const searchText: string = useSelector(({ searchReducer }: any) => searchReducer.searchText);
  const handleOnChange = (event: any) => {
    dispatch(searchActions.setSearchText(event.target.value));
  };
  return (
    <div>
      <TextField
        label="Search for Flickr images!"
        margin="normal"
        onChange={handleOnChange}
      />
      <h1>{searchText}</h1>
    </div>
  );
};

export default Search;
