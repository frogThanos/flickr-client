import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      width: '80%',
      margin: '10px auto 0 auto',
    },
  }),
);

export default useStyles;
