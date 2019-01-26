import React from 'react'

const Footer = ( { ossington, telephone, email, dufferin, twitter, facebook, instagram, twitterIcon, facebookIcon, instagramIcon, logo } ) => (
  <div className="grid-container background-white padding-top-medium padding-bottom-small">
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
          <a target="_blank" rel="noopener noreferrer" href={twitter}><img src={twitterIcon} alt="twitter icon"/></a>
          <a target="_blank" rel="noopener noreferrer" href={facebook}><img src={facebookIcon} alt="facebook icon"/></a>
          <a target="_blank" rel="noopener noreferrer" href={instagram}><img src={instagramIcon} alt="instagram icon"/></a>
        </div>
        <div className="logo">
          <img src={logo} alt="Footer Logo"/>
        </div>
      </footer>
    </div>
  </div>
)

export default Footer
