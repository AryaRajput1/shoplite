import { useLocation, useNavigate } from "react-router-dom";
import "./Newsletter.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";

const Newsletter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [email,setEmail] = useState('')
  const [error,setError] = useState('')

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const onChange = (e)=>{
    setError('')
    setEmail(e.target.value);
  }

  const onSubscribe = (e)=>{
    setError('')
    if(!email){
      setError('Enter a mail id!')
      return 
    }

    if(!validateEmail(email)){
      setError('Enter a valid mail id!')
      return 
    }

    setEmail('')
    window.scrollTo(0,0)
    navigate('/subscribe', {
      isSubscribed: true
    })
  }
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="email" className="" placeholder="Email Address" onChange={onChange} />
          <button onClick={onSubscribe}>Subsribe</button>
        </div>
       {error  && <div className="error">{error}</div>}
        <div className="text">
          Will be used in accordance with our Privacy Policy.
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
