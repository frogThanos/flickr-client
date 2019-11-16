import React, { FC, useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Search: FC = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <TextField
        label="Search on Flickr!"
        margin="normal"
        onChange={(event) => setText(event.target.value)}
      />
      <h1>{text}</h1>
    </div>
  );
};

export default Search;
