import React from 'react'
import "./TicketTable.css"
import { Table } from "react-bootstrap"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function TicketTable({tickets,newTicketState}) {
  return (
    <div className='ticket-table-div'>
    <h5>
      {newTicketState}
    </h5>
    <div className="ticket-table-div-table-wrap">
    <Table striped variant='light' striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Subjects</th>
           <th>Status</th>
           <th>Opened Date</th>
         </tr>
       </thead>
       <tbody>
       {tickets.length ? (
         tickets.map((row) => (
          <tr key={row.id}>
           <td>{row.id}</td>
           <td>
           <Link to={`/tickets/${row.id}`}>
           {row.subject}
           </Link>
           </td>
           <td>{row.status}</td>
           <td>{row.addedAt}</td>
         </tr> 
         ))
       ) :
       <tr aria-colspan="4" className='text-center'> 
         <td colSpan="4">No tickets to display</td>
       </tr>
       }
       </tbody>
     </Table>
    </div>
    </div>
  )
}

export default TicketTable

TicketTable.propTypes = {
  tickets : PropTypes.array.isRequired,
  newTicketState : PropTypes.string.isRequired
}