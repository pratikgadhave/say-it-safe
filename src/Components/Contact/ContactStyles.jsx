import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  full: {
    width: "400px",
    margin: "0 auto",
    height: "100vh",
  },
  form: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    marginBottom: "30px",
  },
  input: {
    padding: "20px",
    borderRadius: "3px",
    marginBottom: "20px",
    border: "1px solid lightgray",
    background: "#fff",
    fontSize: "16px",
    color: "black",
  },
  label: {
    paddingBottom: "10px",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    padding: "20px",
    border: "none",
    backgroundColor: "black",
    fontWeight: "300",
    fontSize: "20px",
    borderRadius: "3px",
    color: "whitesmoke",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    marginTop: "10px",
    "&:hover": {
      background: "green",
    },
  },
}));
