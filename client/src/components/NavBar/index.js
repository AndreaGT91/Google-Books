import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark"  style={{ marginBottom: "0px" }}>
      <Navbar.Brand href="/">Google Books</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item>
          <Nav.Link href="/Search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Saved">Saved</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;