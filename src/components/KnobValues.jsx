import PropTypes from 'prop-types';
import React from 'react';

const KnobValues = props => {
  const { values } = props;
  const elementName = `KnobValues`;
  return (
    <g
      fill="#FFFFFF"
      fillRule="evenodd"
      fontFamily="InterUI-Bold, InterUI"
      fontSize="7"
      fontWeight="bold"
      id={elementName}
      strokeWidth="1"
      transform="translate(3.000000, 2.000000)"
    >
      <text id={`${elementName}-0`} x="8.38299006" y="52">
        {values.position0}
      </text>

      <text id={`${elementName}-1`} x="0.931818182" y="34">
        {values.position1}
      </text>

      <text id={`${elementName}-2`} x="7.93181818" y="15">
        {values.position2}
      </text>

      <text id={`${elementName}-3`} x="25.8286577" y="7">
        {values.position3}
      </text>

      <text id={`${elementName}-4`} x="43.9318182" y="15">
        {values.position4}
      </text>

      <text id={`${elementName}-5`} x="52.9417614" y="34">
        {values.position5}
      </text>

      <text id={`${elementName}-6`} x="44.9877486" y="52">
        {values.position6}
      </text>
    </g>
  );
};

KnobValues.propTypes = {
  values: PropTypes.objectOf(PropTypes.number)
};

KnobValues.defaultProps = {
  values: {
    position0: 0,
    position1: 1,
    position2: 2,
    position3: 3,
    position4: 4,
    position5: 5,
    position6: 6
  }
};

export default KnobValues;
