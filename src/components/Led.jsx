import PropTypes from 'prop-types';
import React from 'react';

const Led = props => {
  const { variant, color, transform } = props;
  const ledCircleHighlighted = (
    <g
      id="Led-circle"
      key="jj"
      stroke="#FFFFFF"
      strokeWidth="1"
      transform="translate(2.000000, 2.000000)"
    >
      <circle cx="5" cy="5" r="4.5" />
    </g>
  );

  const ledCircleImportant = [
    <g id="Led-circle-(large)" key="x" stroke="#FFFFFF" strokeWidth="1">
      <circle cx="7" cy="7" id="Led-circle-large" r="6.5" />
    </g>,
    ledCircleHighlighted
  ];

  return (
    <g fillRule="evenodd" id="Led" transform={transform}>
      {variant === `important` && ledCircleImportant}
      {variant === `highlighted` && ledCircleHighlighted}

      <rect fill={color} height="8" rx="4" width="8" x="3" y="3" />

      <ellipse
        cx="7"
        cy="5"
        fill="#000000"
        fillOpacity="0.15"
        id="Oval"
        rx="3"
        ry="2"
      />
    </g>
  );
};

Led.propTypes = {
  color: PropTypes.string,
  transform: PropTypes.string.isRequired,
  variant: PropTypes.string
};

Led.defaultProps = {
  color: '#ECECEC',
  variant: `undefined`
};

export default Led;
