import React from "react";
import { Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="w-100 d-flex justify-content-center"
      >
        <Navbar.Brand href="#home" className="mx-auto">
          Weather App
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
