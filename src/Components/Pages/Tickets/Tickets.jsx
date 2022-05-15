import React, { useState, useEffect }from 'react'
import "./Tickets.css"
import BreadCrumbPage from "../../Layout/BreadCrumb/BreadCrumb"
import Messages from '../../Layout/AppLayout/Messages/Messages'
import ticketsData from "../../../assets/data/dummy-tickets.json"
import {useParams} from "react-router-dom"


function Tickets() {
 const { trackId }  = useParams()

 console.log(trackId)
 
 const [ticket, setTicket] = useState("")
 
 const getId = () =>{
   for (let index = 0; index < ticketsData.length; index++){
     if(trackId == ticketsData[index].id){
       setTicket(ticketsData[index])
     }
   }
 }

 useEffect(()=>
 { getId()},[trackId])
   

  return (
    <div className='tickets-div-contain'>
     <BreadCrumbPage  page="About Ticket"/>
     <div className="tickets-div-status">
       <div className="tickets-div-status-div">
          <div className="tickets-div-status-div-wrap">
            <label className='tickets-div-status-div-wrap-label'>Subject :</label>
            <h5 className='tickets-div-status-div-wrap-h5'>{ticket.subject}</h5>
          </div>
          <div className="tickets-div-status-div-wrap">
            <label className='tickets-div-status-div-wrap-label'>Date Opened :</label>
            <h5 className='tickets-div-status-div-wrap-h5'>{ticket.addedAt}</h5>
          </div>
          <div className="tickets-div-status-div-wrap">
            <label className='tickets-div-status-div-wrap-label'>Status :</label>
            <h5 className='tickets-div-status-div-wrap-h5'>{ticket.status}</h5>
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