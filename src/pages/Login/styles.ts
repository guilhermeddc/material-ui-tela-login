import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      minWidth: theme.spacing(46),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: theme.spacing(4),
    },
    image: {
      width: 120,
      margin: "0 auto",
    },
    alert: {
      position: "fixed",
      top: theme.spacing(4),
      right: theme.spacing(4),
    },
  })
);

export default useStyles;
