import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 40,
      marginBottom: 40,
    },
    textField: {
      flex: 1,
      marginLeft: '10%',
      marginRight: '10%',
    },
  }),
);

export default useStyles;
