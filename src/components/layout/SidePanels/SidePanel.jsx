import PropTypes from 'prop-types';
import React from 'react';

const SidePanel = props => {
  const { transform } = props;
  return (
    <g id="SidePanel" transform={transform}>
      <g id="Panel">
        <use fill="#8B401D" fillRule="evenodd" xlinkHref="#path-1" />
        <rect
          height="468"
          rx="2"
          stroke="#703419"
          strokeWidth="2"
          width="56"
          x="1"
          y="1"
        />
      </g>

      <g id="Panel-highlight">
        <use fill="#7B3D1F" fillRule="evenodd" xlinkHref="#path-2" />
        <rect
          height="463"
          stroke="#854223"
          strokeWidth="1"
          width="49"
          x="4.5"
          y="3.5"
        />
      </g>
    </g>
  );
};

SidePanel.propTypes = {
  transform: PropTypes.string.isRequired
};

export default SidePanel;
