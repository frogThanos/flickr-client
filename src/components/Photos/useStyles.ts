import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      color: 'black',
    },
    gridList: {
      width: '80%',
    },
    gridTitle: {
      '&:hover': {
        transform: 'scale(1.01)',
        transition: 'all 300ms ease-in-out;'
      },
    },
    image: {
      height: 250,
      width: 250,
    },
  }),
);

export default useStyles;
