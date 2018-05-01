import PropTypes from 'prop-types';
import React from 'react';

const SimpleKnob = props => {
  const { children, transform, labelPositionX, labelPositionY } = props;
  return (
    <g id="Simple-knob" transform={transform}>
      <text
        fill="#FFFFFF"
        fontFamily="InterUI-Medium, Inter UI"
        fontSize="7"
        fontWeight="400"
        id="Title"
        x={labelPositionX}
        y={labelPositionY}
      >
        {children}
      </text>

      <g
        fillRule="evenodd"
        id="Knob"
        strokeWidth="1"
        transform="translate(18.000000, 19.000000)"
      >
        <g id="Outter">
          <use fill="#272727" fillRule="evenodd" xlinkHref="#path-5" />

          <circle cx="13.5" cy="13.5" r="13" stroke="#1E1E1E" strokeWidth="1" />
        </g>

        <g id="Inner">
          <use fill="#191919" fillRule="evenodd" xlinkHref="#path-6" />

          <circle cx="13.5" cy="13.5" r="9" stroke="#000000" strokeWidth="1" />
        </g>
      </g>

      <g id="Indicator">
        <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-7" />

        <rect
          height="13"
          rx="1"
          stroke="#DCDADA"
          strokeWidth="1"
          width="3"
          x="29.5"
          y="16.5"
        />
      </g>
    </g>
  );
};

SimpleKnob.propTypes = {
  children: PropTypes.node.isRequired,
  labelPositionX: PropTypes.string,
  labelPositionY: PropTypes.string,
  transform: PropTypes.string
};

SimpleKnob.defaultProps = {
  labelPositionX: null,
  labelPositionY: null,
  transform: null
};

export default SimpleKnob;
