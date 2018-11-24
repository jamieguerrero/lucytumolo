import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render (props) {
    const {logoUrl} = this.props;
    return(
      <>
      <div className="mobile-nav grid-container menu">
          <Menu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
            <Link to="/">
              <img className="mobile-logo" src={logoUrl} alt="Lucy Tumolo Logo"/>
            </Link>
            <Link
              onClick={() => this.closeMenu()}
              id="locations"
              className="menu-item"
              to="/locations">Locations</Link>
            <Link
              onClick={() => this.closeMenu()}
              id="about"
              className="menu-item"
              to="/about">About</Link>
            <Link
              onClick={() => this.closeMenu()}
              id="testimonials"
              className="menu-item"
              to="/testimonials">Testimonials</Link>
            <Link
              onClick={() => this.closeMenu()}
              id="modalities"
              className="menu-item"
              to="/modalities">Modalities</Link>
            <Link
              onClick={() => this.closeMenu()}
              id="giftcertificate"
              className="menu-item"
              to="/giftcertificate">Gifts</Link>
            <Link
              onClick={() => this.closeMenu()}
              id="faq"
              className="menu-item"
              to="/faq">FAQ</Link>
          </Menu>
          <div className="grid-inner-wrapper menu-inner-wrapper">
            <Link to="/">
              <img className="dark-logo" src={logoUrl} alt="Lucy Tumolo Logo"/>
            </Link>
            <div className="mobile-menu-button padding-top-tiny" onClick={() => this.toggleMenu()}>
              <h3>menu</h3>
            </div>
          </div>
        </div>

        <div className="desktop-nav grid-container menu dark">
          <div className="grid-inner-wrapper menu-inner-wrapper">
            <Link to="/">
              <img className="dark-logo" src={logoUrl} alt="Lucy Tumolo Logo"/>
            </Link>
            <ul className="desktop-nav">
              <li>
                <Link to="/locations">Locations</Link>
              </li>
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
            </ul>
          </div>
        </div>

      </>
  )}
}

export default Header
