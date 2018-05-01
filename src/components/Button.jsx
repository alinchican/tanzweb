import PropTypes from 'prop-types';
import React from 'react';

const Button = props => {
  const elementName = `Button`;
  const { transform, variant } = props;

  const buttonStyles = {
    black: {
      backgroundColor: `#000000`,
      borderColor: `#191919`
    },
    grey: {
      backgroundColor: `#5A5A5A`,
      borderColor: `#494949`
    },
    red: {
      backgroundColor: `#C33630`,
      borderColor: `#B72D28`
    },
    white: {
      backgroundColor: `#F9F9F9`,
      borderColor: `#E9E9E9`
    }
  };

  return (
    <g
      className={elementName}
      style={{ cursor: `pointer` }}
      transform={transform}
    >
      <use
        fill={buttonStyles[variant].backgroundColor}
        fillRule="evenodd"
        xlinkHref="#path-98"
      />

      <rect
        height="19"
        rx="9.5"
        stroke={buttonStyles[variant].borderColor}
        strokeWidth="1"
        width="19"
        x="0.5"
        y="0.5"
      />
    </g>
  );
};

Button.propTypes = {
  transform: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired
};

export default Button;
