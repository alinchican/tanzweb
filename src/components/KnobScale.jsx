import React from 'react';

const KnobIndicatorPrimary = () => (
  <rect height="11" rx="1" width="2" x="0" y="0" />
);

const KnobIndicatorSecondary = () => (
  <rect height="11" rx="0.5" width="1" x="0" y="0" />
);

const KnobScale = () => {
  const elementName = `KnobScale`;

  return (
    <g
      fill="#FFFFFF"
      fillRule="evenodd"
      id={elementName}
      strokeWidth="1"
      transform="translate(7.000000, 10.000000)"
    >
      <g id={`${elementName}-primary`}>
        <g transform="translate(37.000000, 35.500000) rotate(135.000000) translate(-37.000000, -35.500000) translate(36.000000, 30.000000)">
          <KnobIndicatorPrimary />
        </g>

        <g transform="translate(43.000000, 23.500000) rotate(90.000000) translate(-43.000000, -23.500000) translate(42.000000, 18.000000)">
          <KnobIndicatorPrimary />
        </g>

        <g transform="translate(36.000000, 11.500000) scale(1, -1) rotate(135.000000) translate(-36.000000, -11.500000) translate(35.000000, 6.000000)">
          <KnobIndicatorPrimary />
        </g>

        <g transform="translate(23.000000, 0.000000)">
          <KnobIndicatorPrimary />
        </g>

        <g transform="translate(12.000000, 11.500000) rotate(135.000000) translate(-12.000000, -11.500000) translate(11.000000, 6.000000)">
          <KnobIndicatorPrimary />
        </g>

        <g transform="translate(6.000000, 23.500000) rotate(90.000000) translate(-6.000000, -23.500000) translate(5.000000, 18.000000)">
          <KnobIndicatorPrimary />
        </g>

        <g transform="translate(12.000000, 35.500000) scale(-1, 1) rotate(135.000000) translate(-12.000000, -35.500000) translate(11.000000, 30.000000)">
          <KnobIndicatorPrimary />
        </g>
      </g>

      <g
        id={`${elementName}-secondary`}
        transform="translate(4.000000, 2.000000)"
      >
        <g transform="translate(35.500000, 27.500000) rotate(-63.500000) translate(-35.500000, -27.500000) translate(35.000000, 22.000000)">
          <KnobIndicatorSecondary />
        </g>

        <g transform="translate(34.500000, 15.500000) scale(-1, 1) rotate(-63.500000) translate(-34.500000, -15.500000) translate(34.000000, 10.000000)">
          <KnobIndicatorSecondary />
        </g>

        <g transform="translate(27.500000, 5.500000) scale(-1, 1) rotate(-22.500000) translate(-27.500000, -5.500000) translate(27.000000, 0.000000)">
          <KnobIndicatorSecondary />
        </g>

        <g transform="translate(13.500000, 5.500000) rotate(-22.500000) translate(-13.500000, -5.500000) translate(13.000000, 0.000000)">
          <KnobIndicatorSecondary />
        </g>

        <g transform="translate(5.500000, 15.500000) rotate(-63.500000) translate(-5.500000, -15.500000) translate(5.000000, 10.000000)">
          <KnobIndicatorSecondary />
        </g>

        <g transform="translate(5.500000, 27.500000) scale(1, -1) rotate(-63.500000) translate(-5.500000, -27.500000) translate(5.000000, 22.000000)">
          <KnobIndicatorSecondary />
        </g>
      </g>
    </g>
  );
};

export default KnobScale;
