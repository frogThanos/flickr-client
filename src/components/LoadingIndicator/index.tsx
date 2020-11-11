import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../../redux/types';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './useStyles';

const LoadingIndicator: FC = () => {
  const classes = useStyles();
  const isLoading = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.isLoading);
  return (
    <Fragment>
      {isLoading && <LinearProgress className={classes.line} color='primary' />}
    </Fragment>
  )
};

export default LoadingIndicator;
