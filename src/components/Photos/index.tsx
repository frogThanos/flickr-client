import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../../redux/types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useStyles from './useStyles';

const Photos: FC = () => {
  const classes = useStyles();
  const photo = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.photo);
  return(
    <div className={classes.container}>
      <GridList cellHeight="auto" className={classes.gridList} cols={4}>
        {
          photo && photo.map((item: any) => {
            return (
              <GridListTile key={item.id}>
                <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`} alt={item.title} />
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
