import React from 'react'
import "./ReplyMsg.css"

function ReplyMsg() {
  return (
    <div className="messages-div-send-message">
       <h5 className="messages-div-send-message-label">REPLY</h5>
       <textarea name="messagestick" className="messages-div-send-message-textarea"/>
       <div className="messages-div-send-message-reply">
           <h5 className="messages-div-send-message-reply-h5">
               Submit
           </h5>
       </div>
    </div>
  )
}

export default ReplyMsg