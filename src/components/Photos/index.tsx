import React, { FC } from 'react';
import useStyles from './useStyles';

const Photos: FC = () => {
  const classes = useStyles();
  return(
    <div className={classes.container}>
      Photos
    </div>
  )
};

export default Photos;
