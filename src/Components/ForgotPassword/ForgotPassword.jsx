import React from 'react'
import '../LoginForm/LoginForm.css'
import propTypes from 'prop-types'

function ForgotPassword({handleOnChange, email, handleOnResetSubmit, formSwitcher}) {
  return (
    <div className='reset-form'>
       <div className="login-form-wrap">
         <header className='reset-form-header'>
             Forgot Password
         </header>
         <hr />
         <div className="space">
            
         </div>
         <form className='from-body' autoComplete='off'>
           <div className="login-form-email">
             <label>Email :</label>
             <input type="email" name='email' value={email}placeholder='Input Email' required 
             onChange={handleOnChange}/>
           </div>
           <div className="login-from-button">
             <button type='submit' onClick={handleOnResetSubmit}>Submit</button>
           </div>
         </form>
         <div className="forgot-password">
           <a href="#" onClick={ () => formSwitcher("login")}>Loggin In?</a>
         </div>
       </div>
    </div>
  )
}

export default ForgotPassword

ForgotPassword.propTypes = {
  forgetpassword: propTypes.func.isRequired,
  handleOnChange: propTypes.func.isRequired,
  handleOnSubmit: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
}