import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 40,
    },
    textField: {
      flex: 3,
      marginLeft: '10%',
    },
    button: {
      flex: 1,
    }
  }),
);

export default useStyles;
