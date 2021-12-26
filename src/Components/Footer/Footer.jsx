import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Styles";
import { HeartFilled } from "@ant-design/icons";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography
            style={{
              fontFamily: "Roboto Slab",
              marginLeft: "190px",
            }}
            variant="body1"
          >
            Made With{" "}
            <HeartFilled
              style={{
                color: "#e75480 ",
                fontSize: "20px",
              }}
            />{" "}
            By PBL Team!
          </Typography>
        </Container>
        <p style={{ marginLeft: "870px" }}>Team SAY-IT-SAFE</p>
      </footer>
    </div>
  );
};

export default Footer;
