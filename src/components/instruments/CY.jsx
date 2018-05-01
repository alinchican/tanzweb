import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';
import ToneKnob from '../knobs/Tone';

const CYInstrument = () => (
  <g id="cy-instrument" transform="translate(317.000000, 0.000000)">
    <TextLabel positionX="2.23224432" positionY="7">
      CY
    </TextLabel>

    <DecayKnob instrument="cy" />
    <ToneKnob instrument="cp" transform="translate(0.000000, 64.000000)" />
  </g>
);

export default CYInstrument;
