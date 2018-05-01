import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';
import TomToggle from '../TomToggle';
import TuneKnob from '../knobs/Tune';

const MTCInstrument = () => (
  <g id="mtc-instrument" transform="translate(503.000000, 61.000000)">
    <TextLabel positionX="5.91210938" positionY="7">
      MTC
    </TextLabel>

    <TuneKnob instrument="mtc" transform="translate(4.000000, 3.000000)" />
    <TomToggle instrument="mtc" transform="translate(66.000000, 20.000000)" />
    <DecayKnob instrument="mtc" transform="translate(80.000000, 3.000000)" />
  </g>
);

export default MTCInstrument;
