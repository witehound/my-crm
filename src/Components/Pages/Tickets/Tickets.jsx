import React from 'react'
import "./Tickets.css"
import BreadCrumbPage from "../../Layout/BreadCrumb/BreadCrumb"
import Messages from '../../Layout/AppLayout/Messages/Messages'
import ticketsData from "../../../assets/data/dummy-tickets.json"


function Tickets() {
  const ticket = ticketsData[0]
 
  return (
    <div className='tickets-div-contain'>
     <BreadCrumbPage  page="About Ticket"/>
     <div className="tickets-div-status">
       <div className="tickets-div-status-div">
          <div className="tickets-div-status-div-wrap">
            <label className='tickets-div-status-div-wrap-label'>Subject :</label>
            <h5 className='tickets-div-status-div-wrap-h5'>Issues with ssl certificate</h5>
          </div>
          <div className="tickets-div-status-div-wrap">
            <label className='tickets-div-status-div-wrap-label'>Date Opened :</label>
            <h5 className='tickets-div-status-div-wrap-h5'>2020-20-02</h5>
          </div>
          <div className="tickets-div-status-div-wrap">
            <label className='tickets-div-status-div-wrap-label'>Status :</label>
            <h5 className='tickets-div-status-div-wrap-h5'>Pending operators response</h5>
          </div>
       </div>
       <div className="tickets-div-status-div-wrap-space">
          
       </div>
       <div className="tickets-div-status-close-button">
           <h5 className='tickets-div-status-close-button-h5'>Close Ticket</h5>
       </div>
     </div>
     <div className="tickets-div-messages">
       <Messages 
         ticket={ticket.history}
       />
     </div>
    </div>
  )
}

export default Tickets