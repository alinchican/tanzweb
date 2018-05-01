import DTuneKnob from '../knobs/DTune';
import DecayKnob from '../knobs/Decay';
import React from 'react';
import SDecayKnob from '../knobs/SDecay';
import SnappyKnob from '../knobs/Snappy';
import TextLabel from '../TextLabel';
import ToneKnob from '../knobs/Tone';
import TuneKnob from '../knobs/Tune';

const SDInstrument = () => (
  <g id="sd-instrument" transform="translate(190.000000, 0.000000)">
    <TextLabel positionX="3.49573864" positionY="7">
      SD
    </TextLabel>

    <TuneKnob instrument="sd" />
    <DTuneKnob instrument="sd" transform="translate(64.000000, 0.000000)" />
    <SnappyKnob instrument="sd" transform="translate(0.000000, 64.000000)" />
    <SDecayKnob instrument="sd" transform="translate(64.000000, 64.000000)" />
    <ToneKnob instrument="sd" transform="translate(0.000000, 128.000000)" />
    <DecayKnob instrument="sd" transform="translate(64.000000, 128.000000)" />
  </g>
);

export default SDInstrument;
