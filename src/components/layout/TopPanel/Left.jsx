import ABButton from '../../buttons/AB';
import ChainButton from '../../buttons/Chain';
import FunctionButtons from '../../FunctionButtons';
import PatternButton from '../../buttons/Pattern';
import React from 'react';
import RecManTrgButton from '../../buttons/RecManTrg';

const TopPanelLeft = () => (
  <g id="TopPanelLeft" transform="translate(1.000000, 24.000000)">
    <RecManTrgButton />
    <FunctionButtons />
    <ChainButton />
    <ABButton />
    <PatternButton />
  </g>
);

export default TopPanelLeft;
