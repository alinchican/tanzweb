import React from 'react';
import TopPanelBottom from './Bottom';
import TopPanelBranding from './Branding';
import TopPanelCenter from './Center';
import TopPanelLeft from './Left';
import TopPanelRight from './Right';
import TopPanelTop from './Top';

const TopPanel = () => {
  const elementName = `TopPanel`;

  return (
    <g id={elementName} transform="translate(63.000000, 57.000000)">
      <rect
        height="359"
        id={`${elementName}-border`}
        stroke="#FFFFFF"
        width="801"
        x="0.5"
        y="9.5"
      />

      <TopPanelCenter />
      <TopPanelBranding />
      <TopPanelLeft />
      <TopPanelBottom />
      <TopPanelRight />
      <TopPanelTop />
    </g>
  );
};

export default TopPanel;
