import React, { useState, useEffect } from 'react'
import "./NewTicket.css"
import BreadCrumbPage from "../../Layout/BreadCrumb/BreadCrumb"
import AddTicketForm from "../NewTicket/AddTicketForm/AddTicketForm"



const initialFormData = {
  subject: "",
  issueDate: "",
  datail: ""
}

function NewTicket() {
  const [formData,setFormData] = useState(initialFormData)

  useEffect(() => {},
  [formData]
  )

  const handleOnChange = (e) => {
    const{ name, value } = e.target 
    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handelOnSubmitTwo = e => {
    e.preventDefault()
    console.log("works fine", formData)
  }


  return (
    <div className='new-ticket-div'>
     <BreadCrumbPage page="New Ticket"/>
     <div className="new-ticket-div-add" >
       <h5 >Add New Ticket</h5>
       <div className="new-ticket-div-add-main">
         <AddTicketForm
           handleOnChange={handleOnChange}
           frmData = {formData}
           handelOnSubmitTwo={handelOnSubmitTwo}
         />
       </div>
     </div>
    </div>
  )
}

export default NewTicket