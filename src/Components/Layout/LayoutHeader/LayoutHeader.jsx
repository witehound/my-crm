import React from 'react'
import "./LayoutHeader.css"
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard/Dashboard';
import {LinkContainer } from "react-router-bootstrap"

function LayoutHeader() {
  const navigate = useNavigate()

  const logMeOut = () => {
    navigate("/", {replace: true})
  }

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
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/ticketlisting">
          <Nav.Link>Tickets</Nav.Link>
        </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default LayoutHeader

