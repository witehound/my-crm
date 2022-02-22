import React, {useState, useEffect} from 'react'
import "./TicketListing.css"
import BreadCrumbPage from "../../Layout/BreadCrumb/BreadCrumb"
import TicketTable from '../../Layout/TicketTable/TicketTable'
import ticketData from "../../../assets/data/dummy-tickets.json"
import SearchBar from '../../Layout/SearchBar/SearchBar'
import {useNavigate} from "react-router-dom"

function TicketListing() {
  const [displayTicket,setDispalyTicket] = useState(ticketData)
  const [searchResultStr,setsearchResultStr] = useState("")

  useEffect(() => {},[displayTicket,searchResultStr])

  const handleOnChange = e => {
    const { value } = e.target
    setsearchResultStr(value)
    searchTicket(value)
  }

  const searchTicket = searchResultStr => {
    const dispTicket = ticketData.filter(tickets => tickets.subject.toLowerCase().includes(searchResultStr.toLowerCase()))
    setDispalyTicket(dispTicket)
  }

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/newticket")
  }

  return (
    <div className='ticket-lsiting-div'>
      <BreadCrumbPage page="Ticket List"/>
      <div className="ticket-lsiting-div-main">
        <div className="ticket-lsiting-div-search">
         <button className="ticket-lsiting-div-button" onClick={handleNavigate}>
           Add New Ticket
         </button>
         <SearchBar 
           searchResultStr={searchResultStr}
           handleOnChange={handleOnChange}
         />
        </div>
        <TicketTable id="ticket-lsiting-div-table"
          tickets={displayTicket}
          newTicketState="Browse Tickets"
        />
      </div>
    </div>
  )
}

export default TicketListing

