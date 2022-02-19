import React from 'react'
import "./LayoutHeader.css"
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav} from "react-bootstrap"

function LayoutHeader() {
  return (
    <Navbar collapseOnSelect expand='md' id='layout-header-nav' variant='dark'>
      <div className='layout-header-nav-brand'>
        <h6 className='layout-header-nav-brand-6'>
         CRM
        </h6>
      </div>
      <div className="space">
         
      </div>
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

