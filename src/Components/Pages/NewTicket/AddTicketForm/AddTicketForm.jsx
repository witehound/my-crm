import React from 'react'
import "./AddTicketForm.css"
import PropTypes from "prop-types"

function AddTicketForm({handleOnChange,handelOnSubmitTwo,frmData }) {
  return (
    <form autoComplete='off' className='add-ticket-form-div' onSubmit={()=>handelOnSubmitTwo}>
      <div className="add-ticket-form-div-subject">
        <label>Subject</label>
        <input 
          type="text" 
          name="subject"
          value={frmData.subject}
          placeholder="SSL Certification issue"
          required
          onChange={handleOnChange}
        />
      </div>
      <div className="add-ticket-form-div-issue">
      <label>Issue Found At</label>
      <input 
          type="date" 
          name="issueDate"
          value={frmData.issueDate}
          placeholder=""
          required
          onChange={handleOnChange}
        />
      </div>
      <div className="add-ticket-form-div-details">
      <label>Details</label>
        <textarea className='input-details' 
        name='detail'
        value={frmData.detail}
        placeholder='Write Issue Here'
        onChange={handleOnChange}
        > 
        </textarea>
      </div>
      <div className="add-ticket-form-div-button">
         <button onClick={handelOnSubmitTwo}>Add New Ticket</button>
      </div>
      <div className="hr">
        <hr />
      </div>
    </form>
  )
}

export default AddTicketForm

AddTicketForm.propTypes = {
  handelOnSubmitTwo: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired
}