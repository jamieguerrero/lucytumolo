import React from 'react'
import { Link } from 'gatsby'

const HomeHeader = ({ logoUrl }) => {
  return(
    <div className="grid-container menu light position-absolute">
      <div className="grid-inner-wrapper menu-inner-wrapper">
        <Link to="/">
          <img className="light-logo" src={logoUrl} alt="Lucy Tumolo Logo"/>
        </Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/modalities">Modalities</Link>
          </li>
          <li>
            <Link to="/giftcertificate">Gifts</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
)}

export default HomeHeader
