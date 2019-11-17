import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import { RootStateInterface } from '../../redux/types';
import { photosActions } from '../../redux/actions';
import useStyles from './useStyles';

const PaginationComponent: FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const page = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.page);
  const photo = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.photo);
  const isLoading = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.isLoading);
  const pages = useSelector(({ photosReducer }: RootStateInterface) => photosReducer.pages);

  const onChangePage = (current: number) => {
    dispatch(photosActions.fetchPhotosByPage(current));
  };
  return (
    <div className={classes.container}>
      {
        photo && photo.length !== 0 && !isLoading && (
          <Pagination
            current={page}
            total={pages}
            onChange={onChangePage}
          />
        )
      }
    </div>
  );
};

export default PaginationComponent;
