import DecayKnob from '../knobs/Decay';
import React from 'react';
import TextLabel from '../TextLabel';
import ToneKnob from '../knobs/Tone';
import TuneKnob from '../knobs/Tune';

const BD2Instrument = () => (
  <g id="bd2-instrument" transform="translate(127.000000, 0.000000)">
    <TextLabel positionX="3.42507102" positionY="7">
      BD2
    </TextLabel>

    <DecayKnob instrument="bd2" />
    <TuneKnob instrument="bd2" transform="translate(0.000000, 64.000000)" />
    <ToneKnob instrument="bd2" transform="translate(0.000000, 128.000000)" />
  </g>
);

export default BD2Instrument;
