import './index.css';
import Housing from './layout/Housing/index';
import React from 'react';
import RearPanel from './layout/RearPanel';
import SidePanels from './layout/SidePanels/index';
import TopPanel from './layout/TopPanel/index';

const Tanzbar = () => (
  <div id="Tanzbar-container">
    <svg
      height="476"
      id="Tanzbar"
      version="1.1"
      viewBox="0 0 928 476"
      width="928"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>MFB-Tanzbär</title>

      <defs>
        <rect height="470" id="path-1" rx="2" width="58" x="0" y="0" />
        <rect height="464" id="path-2" width="50" x="4" y="3" />
        <circle cx="13.5" cy="13.5" id="path-5" r="13.5" />
        <circle cx="13.5" cy="13.5" id="path-6" r="9.5" />
        <rect height="14" id="path-7" rx="1" width="4" x="29" y="16" />
        <rect height="20" id="path-98" rx="10" width="20" x="0" y="0" />
        <rect height="15" id="path-128" rx="7.5" width="15" x="0" y="0" />
        <circle cx="14" cy="11" id="path-146" r="11" />
        <circle cx="14" cy="11" id="path-147" r="6" />
      </defs>

      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <SidePanels />
        <RearPanel />
        <Housing />
        <TopPanel />
      </g>
    </svg>
  </div>
);

export default Tanzbar;
