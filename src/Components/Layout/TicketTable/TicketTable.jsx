import React from 'react'
import "./TicketTable.css"
import { Table } from "react-bootstrap"

function TicketTable({tickets}) {
  console.log(tickets)
  return (
    <div className='ticket-table-div'>
    <h5>
      Recently Add Tickets
    </h5>
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
           <td>1</td>
           <td>ssl issue</td>
           <td>Client Response</td>
           <td>2020-10-12</td>
         </tr> 
         ))
       ) :
       <tr colSpan="4" className='text-center'> 
         <td>No tickets to display</td>
       </tr>
       }
         
       </tbody>
     </Table>
    </div>
  )
}

export default TicketTable