import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './EntryPage.css'
import LoginForm from '../LoginForm/LoginForm'
import ForgotPassword from '../ForgotPassword/ForgotPassword'

function EntryPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formload, setFormload] = useState("login")
  const navigate = useNavigate()

  const handleOnChange = e => {
    const {name, value} = e.target
    switch (name) {
      case "email":
        setEmail(value)
        break;
      case "password":
        setPassword(value)
        break;
      default:
        break;
    }
  }

  //added an advanced value setter

  const handleOnSubmit = e => {
    e.preventDefault()
    if (!email || !password){
      alert("fill all the form up!")
    }
    //TODO call api with the form
    navigate('/dashboard')
  }

  const handleOnResetSubmit = e => {
    e.preventDefault()
    if (!email ){
      alert("please provide the email!")
    }
    //TODO call api with the form
    console.log(email)
  }

  const formSwitcher = (type) => {
    setFormload(type)
  }

  

  return (
    <div className='entry-page'>
    {formload === 'login' &&
      <LoginForm 
         handleOnChange={handleOnChange}
         handleOnSubmit={handleOnSubmit}
         email={email}
         pass={password}
         formSwitcher={formSwitcher}
      />
    }
    {formload === "forgetpassword" && 
      <ForgotPassword 
         handleOnChange={handleOnChange}
         handleOnResetSubmit={handleOnResetSubmit}
         email={email}
         formSwitcher={formSwitcher}
      />
    }
    </div>
  )
}

export default EntryPage