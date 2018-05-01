import PropTypes from 'prop-types';
import React from 'react';
import TextLabel from './TextLabel';

const KnobTitle = props => {
  const { children } = props;
  return <TextLabel>{children}</TextLabel>;
};

KnobTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default KnobTitle;
