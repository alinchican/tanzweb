import KnobScale from './KnobScale';
import KnobValues from './KnobValues';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleKnob from './SimpleKnob';

const Knob = props => {
  const { transform, labelPositionX, labelPositionY, children } = props;
  return (
    <g className="knob" transform={transform}>
      <KnobScale />
      <KnobValues />
      <SimpleKnob
        labelPositionX={labelPositionX}
        labelPositionY={labelPositionY}
      >
        {children}
      </SimpleKnob>
    </g>
  );
};

Knob.propTypes = {
  children: PropTypes.node.isRequired,
  labelPositionX: PropTypes.string,
  labelPositionY: PropTypes.string,
  transform: PropTypes.string
};

Knob.defaultProps = {
  labelPositionX: 0,
  labelPositionY: 0,
  transform: 'none'
};

export default Knob;
