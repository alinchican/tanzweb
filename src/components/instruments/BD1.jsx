import AttackKnob from '../knobs/Attack';
import DecayKnob from '../knobs/Decay';
import FilterKnob from '../knobs/Filter';
import NoiseKnob from '../knobs/Noise';
import PitchKnob from '../knobs/Pitch';
import React from 'react';
import TextLabel from '..//TextLabel';
import TuneKnob from '../knobs/Tune';

const BD1Instrument = () => (
  <g id="bd1-instrument">
    <TextLabel positionX="1.3762429" positionY="7">
      BD1
    </TextLabel>

    <AttackKnob instrument="bd1" />
    <DecayKnob instrument="bd1" transform="translate(64.000000, 0.000000)" />
    <PitchKnob instrument="bd1" transform="translate(0.000000, 64.000000)" />
    <TuneKnob instrument="bd1" transform="translate(64.000000, 64.000000)" />
    <NoiseKnob instrument="bd1" transform="translate(0.000000, 128.000000)" />
    <FilterKnob instrument="bd1" transform="translate(64.000000, 128.000000)" />
  </g>
);

export default BD1Instrument;
