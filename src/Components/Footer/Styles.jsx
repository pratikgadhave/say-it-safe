import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto Slab",
    display: "flex",
    flexDirection: "column",
    minHeight: "20vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.grey[200],
    marginTop: "auto",
    // padding: theme.spacing(3, 2),
    // marginTop: "auto",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
  },
}));

export default useStyles;
