import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarLanding = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          {" "}
          <b>
            {" "}
            <Link style={{ color: "white" }} to="/">
              Say-It-Safe
            </Link>{" "}
          </b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={refreshPage}>
              <Link style={{ color: "white" }} to="/about">
                About Us
              </Link>
            </Nav.Link>
            {/* <Nav.Link onClick={refreshPage}>
              <Link style={{ color: "white" }} to="/contact">
                Contact Us
              </Link>
            </Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link onClick={refreshPage}>
              <Link
                style={{ color: "white", justifyContent: "space-between" }}
                to="/signin"
              >
                SignIn
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "white" }}>/</Link>
            </Nav.Link>
            <Nav.Link onClick={refreshPage}>
              <Link
                style={{ color: "white", justifyContent: "space-between" }}
                to="/signup"
              >
                SignUp
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarLanding;
