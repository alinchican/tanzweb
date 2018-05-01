import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';
import TomToggle from '../TomToggle';
import TuneKnob from '../knobs/Tune';

const LTCInstrument = () => (
  <g id="ltc-instrument" transform="translate(507.000000, 124.000000)">
    <TextLabel positionX="1.97851562" positionY="7">
      LTC
    </TextLabel>

    <TuneKnob instrument="ltc" transform="translate(0.000000, 4.000000)" />
    <TomToggle instrument="ltc" transform="translate(62.000000, 21.000000)" />
    <DecayKnob instrument="ltc" transform="translate(76.000000, 4.000000)" />
  </g>
);

export default LTCInstrument;
