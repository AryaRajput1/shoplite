import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Success.scss'
import ConfettiGenerator from "confetti-js";

function Success() {
    const navigate = useNavigate()
    useEffect(()=>{
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    },[])
  return (
    <div className="order-success">
      <h1>Your order was successful!</h1>
      <p>Thank you for your purchase. We will send you a confirmation email shortly.</p>
      <button onClick={()=>navigate('/')}>Continue shopping</button>
      <canvas id="my-canvas"></canvas>
    </div>
  )
}

export default Success