import React from 'react'
import './About.scss'

export default function About() {
  return (
    <div className='about'>
        <div className='about-image'>
        <img src='https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg' alt='about-us'/>
        </div>
        <div className='about-content'>
            <strong className='about-heading'>About Us</strong>
        <p className='about-text'>We are an ecommerce company that sells a variety of products. We are committed to providing our customers with the best possible shopping experience. We offer a wide selection of products at competitive prices, and we ship our products quickly and securely.
        </p>
        </div>
    </div>
  )
}
