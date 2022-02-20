import React from 'react'
import ClientsMsgHistory from './ClientsMsgHistory/ClientsMsgHistory'
import "./Messages.css"
import OperatorsMsgHistory from './OperatorsMsgHistory/OperatorsMsgHistory'
import ReplyMsg from './ReplyMsg/ReplyMsg'

function Messages() {
  return (
    <div className='messages-div'>
      <ClientsMsgHistory />
      <OperatorsMsgHistory />
      <ReplyMsg />
    </div>
  )
}

export default Messages