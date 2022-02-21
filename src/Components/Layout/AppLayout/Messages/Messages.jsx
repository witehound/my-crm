import React from 'react'
import { useState, useEffect } from 'react'
import ClientsMsgHistory from './ClientsMsgHistory/ClientsMsgHistory'
import "./Messages.css"
import ReplyMsg from './ReplyMsg/ReplyMsg'

function Messages({ticket}) {

  const [message, setMessage] = useState("")

  const handleOnChange = e => {
    setMessage(e.target.value)
  }

  const handleOnSubmit = () => {
    console.log(message)
  }

   useEffect(()=>{},
   [message])

  return (
    <div className='messages-div'>
      <ClientsMsgHistory 
        ticket={ticket}
      />
      <ReplyMsg 
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
      />
    </div>
  )
}

export default Messages