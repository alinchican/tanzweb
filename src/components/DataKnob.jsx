import KnobScale from './KnobScale';
import KnobValues from './KnobValues';
import React from 'react';
import SimpleKnob from './SimpleKnob';

const DataKnob = () => {
  const elementName = `data-knob`;
  const knobValues = {
    position0: 1,
    position1: 2,
    position2: 3,
    position3: 4,
    position4: 5,
    position5: 6,
    position6: 7
  };

  return (
    <g id={elementName} transform="translate(655.000000, 0.000000)">
      <g
        id={`${elementName}-functions`}
        transform="translate(0.000000, 58.000000)"
      >
        <path
          d="M16,0 L47,0 L47,1 L16,1 L16,19 L15,19 L15,0 L16,0 Z"
          fill="#EEEEEE"
          id={`${elementName}-functions-border`}
        />

        <rect
          height="97"
          id={`${elementName}-functions-container`}
          stroke="#EEEEEE"
          width="32"
          x="0.5"
          y="19.5"
        />

        <text
          fill="#FFFFFF"
          fontFamily="InterUI-Bold, Inter UI"
          fontSize="6"
          fontWeight="bold"
          id={`${elementName}-functions-text`}
          line-spacing="8.69999981"
        >
          <tspan x="3.5" y="26.3000002">
            CV3
          </tspan>
          <tspan x="3.5" y="35">
            BD:Dist
          </tspan>
          <tspan x="3.5" y="43.6999998">
            SD:Pitch
          </tspan>
          <tspan x="3.5" y="52.3999996">
            RS:Tune
          </tspan>
          <tspan x="3.5" y="61.0999994">
            CY:Tune
          </tspan>
          <tspan x="3.5" y="69.7999992">
            OH:Tune
          </tspan>
          <tspan x="3.5" y="78.499999">
            HH:Tune
          </tspan>
          <tspan x="3.5" y="87.1999989">
            CP:Trig
          </tspan>
          <tspan x="3.5" y="95.8999987">
            TT:Noise
          </tspan>
          <tspan x="3.5" y="104.599998">
            CB:Tune
          </tspan>
          <tspan x="3.5" y="113.299998">
            MA:Dec
          </tspan>
        </text>
      </g>

      <text
        fill="#FFFFFF"
        fontFamily="InterUI-Medium, Inter UI"
        fontSize="7"
        fontWeight="400"
        id="Extra-label"
      >
        <tspan x="28.1883878" y="67">
          Tempo
        </tspan>
      </text>

      <g id="Knob" transform="translate(8.000000, 0.000000)">
        <KnobScale />
        <KnobValues values={knobValues} />
        <SimpleKnob>
          <tspan x="24.0488281" y="56">
            Data
          </tspan>
        </SimpleKnob>
      </g>
    </g>
  );
};

export default DataKnob;
