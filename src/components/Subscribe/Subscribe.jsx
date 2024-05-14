import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Subscribe.scss'

function Subscribe() {
  const navigate = useNavigate()

  return (
    <div className="subscribe">
      <h1>Your email is subsribed!</h1>
      <p>Thank you for your subscribing this. We will send you a Promotional/Offers email daily.</p>
      <button onClick={()=>navigate('/')}>Continue shopping</button>
    </div>
  )
}

export default Subscribe