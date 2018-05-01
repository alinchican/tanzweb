import React from 'react';

const PowerSupplyPort = () => {
  const elementName = `powersupplyport`;
  return (
    <g className={elementName} transform="translate(0.000000, 20.000000)">
      <rect
        className={`${elementName}-connector`}
        fill="#A6A9AA"
        height="5"
        rx="1"
        width="26"
        x="0"
        y="0"
      />

      <rect
        className={`${elementName}-connector-highlight`}
        fill="#C9CFD1"
        height="5"
        rx="1"
        width="15"
        x="6"
        y="0"
      />
    </g>
  );
};

export default PowerSupplyPort;
