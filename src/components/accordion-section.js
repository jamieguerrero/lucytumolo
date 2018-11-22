import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div className="accordion-section padding-top-tiny">
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          <p className={ (isOpen) ? "accordion-label open" : "accordion-label close"}>{label}</p>
        </div>
        {isOpen && (
          <div className="text-regular padding-top-tiny">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
