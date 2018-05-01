import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';
import TuneKnob from '../knobs/Tune';

const CLInstrument = () => (
  <g id="cl-instrument" transform="translate(316.000000, 124.000000)">
    <TextLabel positionX="3.20205966" positionY="7">
      CL
    </TextLabel>

    <TuneKnob instrument="cl" transform="translate(0.000000, 4.000000)" />
    <DecayKnob instrument="cl" transform="translate(65.000000, 4.000000)" />
  </g>
);

export default CLInstrument;
