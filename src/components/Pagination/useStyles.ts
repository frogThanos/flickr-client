import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      width: '80%',
      margin: '20px auto 20px auto',
    },
  }),
);

export default useStyles;
