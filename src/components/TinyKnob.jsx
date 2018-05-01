import KnobTitle from './KnobTitle';
import PropTypes from 'prop-types';
import React from 'react';

const TinyKnob = props => {
  const { transform, children } = props;
  const elementName = `SmallKnob`;
  return (
    <g id={elementName} transform={transform}>
      <KnobTitle>{children}</KnobTitle>

      <g id="Small-volume-knob" transform="translate(1.000000, 0.000000)">
        <g id="Button">
          <use fill="#191919" fillRule="evenodd" xlinkHref="#path-128" />
          <rect
            height="14"
            rx="7"
            stroke="#000000"
            strokeWidth="1"
            width="14"
            x="0.5"
            y="0.5"
          />
        </g>

        <rect
          fill="#656565"
          fillRule="evenodd"
          height="4"
          id="Indicator"
          transform="translate(3.966305, 12.211881) rotate(35.000000) translate(-3.966305, -12.211881) "
          width="2"
          x="2.96630492"
          y="10.2118805"
        />
      </g>
    </g>
  );
};

TinyKnob.propTypes = {
  children: PropTypes.node.isRequired,
  transform: PropTypes.string.isRequired
};

export default TinyKnob;
