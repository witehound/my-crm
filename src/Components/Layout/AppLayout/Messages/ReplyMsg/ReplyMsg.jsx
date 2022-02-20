import React from 'react'
import "./ReplyMsg.css"
import PropTypes from "prop-types"

function ReplyMsg({handleOnChange, handleOnSubmit}) {
  return (
    <div className="messages-div-send-message">
       <h5 className="messages-div-send-message-label">REPLY</h5>
       <textarea name="messagestick" className="messages-div-send-message-textarea" onChange={handleOnChange}>

       </textarea>
       <div className="messages-div-send-message-reply">
           <h5 className="messages-div-send-message-reply-h5" onClick={handleOnSubmit}>
               Submit
           </h5>
       </div>
    </div>
  )
}

export default ReplyMsg

ReplyMsg.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
}