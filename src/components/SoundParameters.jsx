import BD1Instrument from './instruments/BD1';
import BD2Instrument from './instruments/BD2';
import CLInstrument from './instruments/CL';
import CPInstrument from './instruments/CP';
import CYInstrument from './instruments/CY';
import HHInstrument from './instruments/HH';
import HTCInstrument from './instruments/HTC';
import LTCInstrument from './instruments/LTC';
import MTCInstrument from './instruments/MTC';
import OHInstrument from './instruments/OH';
import React from 'react';
import SDInstrument from './instruments/SD';

const SoundParameters = () => {
  const elementName = `SoundParameters`;

  return (
    <g id={elementName}>
      <path
        d="M318,124 L381,124 L381,1 L382,1 L382,61 L444,61 L444,1 L445,1 L445,181 L444,181 L444,125 L318,125 L318,181 L317,181 L317,1 L318,1 L318,124 Z M444,124 L444,62 L382,62 L382,124 L444,124 Z M508,125 L508,180 L507,180 L507,1 L508,1 L508,61 L641,61 L641,62 L508,62 L508,124 L641,124 L641,125 L508,125 Z M191,1 L192,1 L192,181 L191,181 L191,1 Z M128,1 L129,1 L129,181 L128,181 L128,1 Z"
        fill="#EEEEEE"
        idx={`${elementName}-borders`}
      />

      <BD1Instrument />

      <BD2Instrument />
      <SDInstrument />

      <CYInstrument />
      <OHInstrument />
      <HHInstrument />
      <CLInstrument />

      <CPInstrument />
      <HTCInstrument />
      <MTCInstrument />
      <LTCInstrument />
    </g>
  );
};

export default SoundParameters;
