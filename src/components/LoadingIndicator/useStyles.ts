import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    line: {
      width: '100%',
      height: 5,
    }
  }),
);

export default useStyles;
