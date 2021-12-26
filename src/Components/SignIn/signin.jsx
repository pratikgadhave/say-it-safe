import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import cogoToast from "cogo-toast";
import fire from "../../config/firebase";

const SignIn = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  const UserInfo = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(UserInfo);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        // console.log(user);
        history.push("/homepage");
        cogoToast.success("User Logged In Successfully");
      })
      .catch((err) => {
        console.log(err);
        cogoToast.error(err.message);
      });
  };

  const classes = useStyles();
  return (
    <Router>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleClick}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={user.email}
                autoComplete="email"
                onChange={handleChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Nav.Link onClick={refreshPage}>
                    <Link to="/forgotpassword">Forgot password?</Link>
                  </Nav.Link>
                </Grid>
                <Grid item>
                  <Nav.Link onClick={refreshPage}>
                    <Link to="/signup">Don't have an account? Sign Up</Link>
                  </Nav.Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </Router>
  );
};

export default SignIn;
