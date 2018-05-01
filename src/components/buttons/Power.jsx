import React, { Component } from 'react';

class PowerButton extends Component {
  render() {
    const elementName = `power-button`;

    return (
      <g className={elementName} transform="translate(64.000000, 0.000000)">
        <g className={`${elementName}-switch-animation`}>
          <rect
            className={`${elementName}-switch`}
            fill="#C33630"
            height="9"
            rx="1"
            width="29"
            x="5"
            y="0"
          />

          <g
            className={`${elementName}-switch-highlights`}
            fill="#DE4640"
            transform="translate(6.000000, 0.000000)"
          >
            <rect
              className={`${elementName}-switch-highlight`}
              height="9"
              width="1"
              x="0"
              y="0"
            />

            <rect
              className={`${elementName}-switch-highlight`}
              height="9"
              width="1"
              x="26"
              y="0"
            />
          </g>
        </g>

        <rect
          className={`${elementName}-housing`}
          fill="#000000"
          height="17"
          rx="1"
          width="38"
          x="0"
          y="8"
        />

        <g
          className={`${elementName}-housing-highlights`}
          fill="#2D2D2D"
          transform="translate(2.000000, 8.000000)"
        >
          <rect
            className={`${elementName}-housing-highlight`}
            height="16"
            width="2"
            x="0"
            y="0"
          />

          <rect
            className={`${elementName}-housing-highlight`}
            height="16"
            width="2"
            x="32"
            y="0"
          />
        </g>
      </g>
    );
  }
}

export default PowerButton;
