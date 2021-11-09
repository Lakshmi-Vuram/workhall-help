

import React from 'react'
import { Link } from "gatsby"
import {  Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import whiteLogo from '../../assets/logo-white.svg'

const Header = () => (

  <div className="header">
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={whiteLogo} alt="WorkHall Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/product" className="nav-link">PRODUCT</Link>
            <Link to="/learn" className="nav-link">LEARN</Link>
            <Link to="/partners" className="nav-link">PARTNERS</Link>
            <Link to="/buy" className="nav-link">BUY</Link>
            <Link to="/help_page/help" className="nav-link">CONTACT</Link>
            <Link to="/signin" className="nav-link">SIGN IN</Link>
            <Link to="/signup" className="nav-link" style={{borderRadius: "4px", background: "#181d31"}}>SIGN UP</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

)

export default Header
