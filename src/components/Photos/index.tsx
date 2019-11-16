import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateInterface } from '../../redux/types';
import { photosActions, searchActions } from '../../redux/actions';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TablePagination from "@material-ui/core/TablePagination";
import useStyles from './useStyles';

const Photos: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const photo = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.photo);
  const page = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.page);
  const pages = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.pages);
  const rowsPerPage = useSelector(({ searchReducer }: RootStateInterface) => searchReducer.rowsPerPage);
  const currentPage = useSelector(({ searchReducer }: RootStateInterface) => searchReducer.currentPage);

  const onChangeRowsPerPage = (event :any) => {
    console.log('onChangeRowsPerPage: ', event.target.value);
    dispatch(searchActions.setRowsPerPage(event.target.value));
  };

  const onChangePage = () => {
    console.log('onChangePage');
    dispatch(photosActions.fetchPhotos());
  };
  return(
    <div className={classes.container}>
      <GridList cellHeight="auto" className={classes.gridList} cols={4}>
        {
          photo && photo.length !== 0 && photo.map((item: any) => {
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
      <TablePagination
        component="nav"
        page={currentPage}
        labelRowsPerPage="Number of photos"
        rowsPerPage={rowsPerPage}
        count={pages}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangePage={onChangePage}
      />
    </div>
  )
};

export default Photos;
