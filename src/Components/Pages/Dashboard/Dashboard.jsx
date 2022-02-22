import React from 'react'
import TicketTable from '../../Layout/TicketTable/TicketTable'
import "./Dashboard.css"
import tickets from "../../../assets/data/dummy-tickets.json"
import BreadCrumbPage from "../../Layout/BreadCrumb/BreadCrumb"
import { useNavigate} from "react-router-dom"

function Dashboard({handleNaviagate}) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/newticket")
  }
  return (
    <div className='dashboard-div'>
     <BreadCrumbPage page="Dashboard"/>
     <div className="dashboard-div-add-ticket">
         <div className="dashboard-div-add-ticket-button" onClick={handleNavigate}>
           Add New Ticket
         </div>
         <div className="dashboard-div-add-ticket-data-area">
           <h6>
            Total Tickets : 50
           </h6>
           <h6>
             Pending Tickets : 20
           </h6>
         </div>
     </div>
     <TicketTable 
       tickets={tickets}
       newTicketState="Recently Added Tickets"
     />
    </div>
  )
}

export default Dashboard