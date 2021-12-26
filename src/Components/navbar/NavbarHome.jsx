import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import cogoToast from "cogo-toast";
import { Link, useHistory } from "react-router-dom";
import fire from "../../config/firebase";
import { Button } from "antd";

const NavbarHome = () => {
  const history = useHistory();

  // var user = fire.auth().currentUser;
  // var name, email, photoUrl, uid, emailVerified;

  // if (user != null) {
  //   name = user.displayName;
  //   email = user.email;
  //   photoUrl = user.photoURL;
  //   emailVerified = user.emailVerified;
  // uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
  // // this value to authenticate with your backend server, if
  // // you have one. Use User.getToken() instead.
  // }

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
        cogoToast.success("User Logged Out Successfully");
      });
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          {" "}
          <b>
            {" "}
            <Link style={{ color: "white" }} to="/homepage">
              Say-It-Safe
            </Link>{" "}
          </b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link style={{ color: "white" }} to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "white" }} to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button type="primary" danger onClick={logout}>
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
