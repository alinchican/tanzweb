import PowerButton from '../buttons/Power';
import PowerSupplyPort from '../connectors/PowerSupplyPort';
import React from 'react';
import TRSJack from '../connectors/TRSJack';

const RearPanel = () => {
  const elementName = `RearPanel`;

  return (
    <g id={elementName} transform="translate(135.000000, 0.000000)">
      <PowerSupplyPort />
      <PowerButton />

      <g
        id={`${elementName}-connectors`}
        transform="translate(312.000000, 13.000000)"
      >
        <TRSJack id="BD-out" transform="translate(0, 0)" />
        <TRSJack id="SDRS-out" transform="translate(59, 0)" />
        <TRSJack id="HHCY-out" transform="translate(111, 0)" />
        <TRSJack id="CP-out" transform="translate(167, 0)" />
        <TRSJack id="TO-CO-out" transform="translate(223, 0)" />
        <TRSJack id="CBCL-out" transform="translate(278, 0)" />
        <TRSJack id="Audio-out" transform="translate(353, 0)" />
      </g>
    </g>
  );
};

export default RearPanel;
