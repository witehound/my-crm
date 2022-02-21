import React from 'react'
import "./LayoutHeader.css"
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

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
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/tickets'>Tickets</Link>
          <Link href='/'>Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LayoutHeader

