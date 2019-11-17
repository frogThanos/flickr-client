import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }),
);

export default useStyles;
