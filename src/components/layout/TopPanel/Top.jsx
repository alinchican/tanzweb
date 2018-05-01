import MiniJack from '../../MiniJack';
import PortLabel from '../../PortLabel';
import React from 'react';
import SimpleKnob from '../../SimpleKnob';
import TinyKnob from '../../TinyKnob';

const TopPanelTop = () => (
  <g id="TopPanelTop" transform="translate(69.000000, 0.000000)">
    <g id="Volume-knobs" transform="translate(8.000000, 38.000000)">
      <SimpleKnob transform="translate(659.000000, 0.000000)">
        <tspan x="20.307706" y="56">
          Master
        </tspan>
      </SimpleKnob>

      <TinyKnob transform="translate(618.000000, 28.000000)">
        <tspan x="2.72514205" y="28">
          MA
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(570.000000, 28.000000)">
        <tspan x="3.41867898" y="28">
          CB
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(522.000000, 28.000000)">
        <tspan x="0.889382102" y="28">
          HTC
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(475.000000, 28.000000)">
        <tspan x="0.459339489" y="28">
          MTC
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(428.000000, 28.000000)">
        <tspan x="1.48597301" y="28">
          LTC
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(380.000000, 28.000000)">
        <tspan x="3.41867898" y="28">
          CP
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(332.000000, 28.000000)">
        <tspan x="3.71200284" y="28">
          CL
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(285.000000, 28.000000)">
        <tspan x="2.98863636" y="28">
          HH
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(238.000000, 28.000000)">
        <tspan x="2.99360795" y="28">
          OH
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(190.000000, 28.000000)">
        <tspan x="3.38636364" y="28">
          CY
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(143.000000, 28.000000)">
        <tspan x="3.60138494" y="28">
          RS
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(96.000000, 28.000000)">
        <tspan x="3.47585227" y="28">
          SD
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(49.000000, 28.000000)">
        <tspan x="1.39524148" y="28">
          BD2
        </tspan>
      </TinyKnob>

      <TinyKnob transform="translate(0.000000, 28.000000)">
        <tspan x="1.87872869" y="28">
          BD1
        </tspan>
      </TinyKnob>
    </g>

    <g id="Connectors" transform="translate(2.000000, 24.000000)">
      <MiniJack transform="translate(285.000000, 0.000000)">
        <tspan x="5.99076705" y="33">
          Sync
        </tspan>
      </MiniJack>

      <MiniJack transform="translate(238.000000, 0.000000)">
        <tspan x="6.08149858" y="33">
          Start
        </tspan>
      </MiniJack>

      <MiniJack transform="translate(187.000000, 0.000000)">
        <tspan x="4.2668679" y="33">
          Gate2
        </tspan>
      </MiniJack>

      <MiniJack transform="translate(142.000000, 0.000000)">
        <tspan x="4.75035511" y="33">
          Gate1
        </tspan>
      </MiniJack>

      <MiniJack transform="translate(95.000000, 0.000000)">
        <tspan x="7.21377841" y="33">
          CV3
        </tspan>
      </MiniJack>

      <MiniJack transform="translate(48.000000, 0.000000)">
        <tspan x="7.21377841" y="33">
          CV2
        </tspan>
      </MiniJack>

      <MiniJack>
        <tspan x="7.69726562" y="33">
          CV1
        </tspan>
      </MiniJack>
    </g>

    <g fill="#FFFFFF" fontSize="7" id="Rear-panel-connector-labels">
      <PortLabel>
        <tspan x="0" y="7">
          POWER
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="69" y="7">
          ON/OFF
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="142" y="7">
          MIDI In1
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="196" y="7">
          MIDI In2
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="250" y="7">
          MIDI Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="331" y="7">
          BD Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="382" y="7">
          SD/RS Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="443" y="7">
          HH/CY Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="501" y="7">
          CP Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="552" y="7">
          TO/CO Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="606" y="7">
          CB/CL Out
        </tspan>
      </PortLabel>

      <PortLabel>
        <tspan x="681" y="7">
          Audio Out
        </tspan>
      </PortLabel>
    </g>
  </g>
);

export default TopPanelTop;
