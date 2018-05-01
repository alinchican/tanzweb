import AttackKnob from '../knobs/Attack';
import DecayKnob from '../knobs/Decay';
import FilterKnob from '../knobs/Filter';
import React from 'react';
import TextLabel from '../TextLabel';

const CPInstrument = () => (
  <g id="cp-instrument" transform="translate(443.000000, 0.000000)">
    <TextLabel positionX="3.4087358" positionY="7">
      CP
    </TextLabel>

    <DecayKnob instrument="cp" />
    <FilterKnob instrument="cp" transform="translate(0.000000, 64.000000)" />
    <AttackKnob instrument="cp" transform="translate(0.000000, 128.000000)" />
  </g>
);

export default CPInstrument;
