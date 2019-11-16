import React, { FC } from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';

const Photos: FC = () => {
  const classes = useStyles();
  return(
    <Container maxWidth="md" className={classes.container}>
      Photos
    </Container>
  )
};

export default Photos;
