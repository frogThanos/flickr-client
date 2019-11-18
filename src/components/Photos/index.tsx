import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../../redux/types';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useStyles from './useStyles';

// @ts-ignore because it doesn't have @types :(
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Photos: FC = () => {
  const classes = useStyles();
  const large = useMediaQuery('(min-width:1600px)');
  const medium = useMediaQuery('(min-width:1200px)');
  const small = useMediaQuery('(min-width:600px)');
  const mobile = useMediaQuery('(min-width:600px)');

  const photo = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.photo);
  const isLoading = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.isLoading);

  // I'm sure there is a better way to do this
  // but because of time constrains I created
  // this monster :)
  const calculateColumns = (): number => {
    if (large) {
      return 4
    }
    if (medium) {
      return 3
    }
    if (small) {
      return 2
    }
    if (mobile) {
      return 1
    }
    return 1;
  };

  return(
    <div className={classes.container}>
      <GridList cellHeight={300} className={classes.gridList} cols={calculateColumns()}>
        {
          photo && photo.length !== 0 && !isLoading && photo.map((item: any) => {
            return (
              <GridListTile key={item.id} className={classes.gridTitle}>
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
