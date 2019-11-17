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
    image: {
      height: 250,
      width: 250,
      border: '1px solid black'
    },
    line: {
      width: '80%',
    }
  }),
);

export default useStyles;
