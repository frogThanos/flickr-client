import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../../redux/types';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './useStyles';

// @ts-ignore because it doesn't have @types :(
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Photos: FC = () => {
  const classes = useStyles();
  const photo = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.photo);
  const isLoading = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.isLoading);

  return(
    <div className={classes.container}>
      {isLoading && <LinearProgress className={classes.line} color='primary' />}
      <GridList cellHeight="auto" className={classes.gridList} cols={2}>
        {
          photo && photo.length !== 0 && !isLoading && photo.map((item: any) => {
            return (
              <GridListTile key={item.id}>
                <LazyLoadImage
                  alt={item.title}
                  effect="opacity"
                  src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
                />
                <GridListTileBar
                  title={item.title}
                />
              </GridListTile>
            )
          })
        }
      </GridList>
    </div>
  )
};

export default Photos;
