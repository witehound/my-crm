import React from 'react'
import "../Messages.css"
import PropTypes from "prop-types"

function ClientsMsgHistory({ticket}) {
  if (!ticket) return null

  return ticket.map((row,i) => 
  (
    <div className="messages-div-client" key={i}>
        <div className="messages-div-client-title">
           <label className="messages-div-client-title-label">{row.messageBy}</label>
           <h5 className="messages-div-client-title-h5">{row.date}</h5>
        </div>
        <div className="messages-div-client-space">
           
        </div>
        <div className="messages-div-client-display" >
            {row.message}
        </div>
    </div>
  )
  )
}

export default ClientsMsgHistory

ClientsMsgHistory.propTypes = {
  ticket: PropTypes.object.isRequired,

}