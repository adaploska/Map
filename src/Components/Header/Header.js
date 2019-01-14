import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../Header/header.css"

const Header = (props) => {

  const style = {
    backgroundColor: "#bfb7b7",
    width: "100%",
    height: "40px",
    float: "rigth"
  }

  return (
    // <div style={style}> Travel Steps
    //   <Button onClick={props.click}>zaloguj się</Button>
    // </div>
    <div className="container-fluid header">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Travel Steps
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/* <NavItem href="/signup">Signup</NavItem> */}
            <LinkContainer to="/signup">
              <NavItem onClick={props.click}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header;


