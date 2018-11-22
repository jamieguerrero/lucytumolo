import React from 'react'

const Footer = ( { ossington, telephone, email, dufferin, twitter, facebook, instagram } ) => (
  <div className="grid-container background-white padding-top-medium padding-bottom-medium">
    <div className="grid-inner-wrapper">
      <footer className="background-white">
        <div className="locationa">
          <div
            dangerouslySetInnerHTML={{
              __html: ossington,
            }}
          />
        </div>
        <div className="contact">
          <h4>telephone</h4>
          <p>{telephone}</p>
          <h4>email</h4>
          <p>{email}</p>
        </div>
        <div className="locationb">
          <div
            dangerouslySetInnerHTML={{
              __html: dufferin,
            }}
          />
        </div>
        <div className="socials">
          <a href={twitter}><i className="fab fa-twitter"></i></a>
          <a href={facebook}><i className="fab fa-facebook"></i></a>
          <a href={instagram}><i className="fab fa-instagram"></i></a>
        </div>
        <div className="logo">
          logo
        </div>

      </footer>
    </div>
  </div>
)

export default Footer
