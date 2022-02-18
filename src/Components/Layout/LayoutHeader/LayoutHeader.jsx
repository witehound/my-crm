import React from 'react'
import "./LayoutHeader.css"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"

function LayoutHeader() {
  return (
    <Navbar heightcollapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
      <Navbar.Brand>
        CRM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/dashboard'>Tickets</Nav.Link>
          <Nav.Link href='/dashboard'>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LayoutHeader

