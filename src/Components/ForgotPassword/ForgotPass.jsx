import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import cogoToast from "cogo-toast";
import Container from "@material-ui/core/Container";
import fire from "../../config/firebase";

const ForgotPass = (e) => {
  function refreshPage() {
    window.location.reload(false);
  }
  const classes = useStyles();
  const Userr = {
    email: "",
  };
  const [user, setUser] = useState(Userr);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(user.email);

    // try {
    //   console.log(user.email);
    //   await resetPassword(e.target);
    //   cogoToast.info("Check your inbox for further instructions..!!");
    // } catch (error) {
    //   if (user.email === "") {
    //     cogoToast.warn("Please enter your email");
    //   } else {
    //     cogoToast.error("Please try again!, Failed to reset password");
    //   }
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const resetPassword = (email) => {
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        cogoToast.info("Check your inbox for further instructions..!!");
      })
      .catch(() => {
        if (user.email === "") {
          cogoToast.warn("Please enter your email");
        } else {
          cogoToast.error("Please try again!, Failed to reset password");
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email Address"
            name="email"
            onChange={handleChange}
            value={user.email}
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset Password
          </Button>
        </form>
        <Grid item xs>
          <Button onClick={refreshPage}>
            <Link to="/signin">Login</Link>
          </Button>
        </Grid>
      </div>
    </Container>
  );
};

export default ForgotPass;
