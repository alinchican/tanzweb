import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';
import TomToggle from '../TomToggle';
import TuneKnob from '../knobs/Tune';

const HTCInstrument = () => (
  <g id="htc-instrument" transform="translate(507.000000, 0.000000)">
    <TextLabel positionX="2.43661222" positionY="7">
      HTC
    </TextLabel>

    <TuneKnob instrument="htc" />
    <TomToggle instrument="htc" transform="translate(62.000000, 18.000000)" />
    <DecayKnob instrument="htc" transform="translate(76.000000, 0.000000)" />
  </g>
);

export default HTCInstrument;
