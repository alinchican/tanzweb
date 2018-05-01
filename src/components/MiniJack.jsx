import PropTypes from 'prop-types';
import React from 'react';
import TextLabel from './TextLabel';

const MiniJack = props => {
  const { transform, children } = props;
  const elementName = `MiniJack`;
  return (
    <g className={elementName} transform={transform && transform}>
      <TextLabel>{children}</TextLabel>

      <g fillRule="evenodd" strokeWidth="1">
        <g className={`${elementName}-outer`}>
          <use fill="#D2D2D2" fillRule="evenodd" xlinkHref="#path-146" />

          <circle cx="14" cy="11" r="10.5" stroke="#E8E8E8" strokeWidth="1" />
        </g>

        <circle cx="14" cy="11" r="6.5" stroke="#363636" />

        <g className={`${elementName}-inner`}>
          <use fill="#000000" fillRule="evenodd" xlinkHref="#path-147" />

          <circle cx="14" cy="11" r="5.5" stroke="#6F6E6E" strokeWidth="1" />
        </g>
      </g>
    </g>
  );
};

MiniJack.propTypes = {
  children: PropTypes.node.isRequired,
  transform: PropTypes.string
};

MiniJack.defaultProps = {
  transform: null
};

export default MiniJack;
