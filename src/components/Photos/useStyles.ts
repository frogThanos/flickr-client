import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 40,
      marginLeft: '10%',
      marginRight: '10%',
      border: '1px solid black',
    },
  }),
);

export default useStyles;
