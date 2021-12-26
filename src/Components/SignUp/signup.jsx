import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import cogoToast from "cogo-toast";
import Container from "@material-ui/core/Container";
import fire from "../../config/firebase";

const SignUp = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  const classes = useStyles();
  const history = useHistory();

  const UserInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [user, setUser] = useState(UserInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirm_password) {
      return setUser((prev) => {
        return {
          ...prev,
          confirm_password: "",
          err: cogoToast.error("Password Do Not Match"),
        };
      });
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log(user);
        history.push("/homepage");
        cogoToast.success("User Created Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Router>
      <div className={classes.bg}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    onChange={handleChange}
                    value={user.firstName}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    id="confirm password"
                    value={user.confirm_password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Nav.Link onClick={refreshPage}>
                    <Link to="/signin">Already have an account? Sign in</Link>
                  </Nav.Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </Router>
  );
};

export default SignUp;
