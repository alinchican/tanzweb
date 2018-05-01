import React, { Component } from 'react';

function masterButton(WrappedComponent) {
  // eslint-disable-line
  return class Kakakak extends Component {
    static displayName = `masterButton(${WrappedComponent.displayName})`;

    constructor(props) {
      super(props);

      this.state = {
        isButtonHolding: false
      };

      this.holdTimeout;
      this.holdTimeoutThreshold = 300;
      this.handleButtonPress = this.handleButtonPress.bind(this);
      this.handleButtonHold = this.handleButtonHold.bind(this);
      this.handleButtonRelease = this.handleButtonRelease.bind(this);
    }

    handleButtonHold = () => {
      const { onButtonHold } = this.props; // eslint-disable-line
      this.setState({ isButtonHolding: true }); // eslint-disable-line
      onButtonHold();
    };

    handleButtonPress = () => {
      const { buttonState } = this.props; // eslint-disable-line

      if (buttonState.isHoldable === true) {
        this.holdTimeout = setTimeout(
          this.handleButtonHold,
          this.holdTimeoutThreshold
        );
      }
    };

    handleButtonRelease = () => {
      const { buttonState, onButtonPress } = this.props; // eslint-disable-line
      const { isButtonHolding } = this.state;
      if (buttonState.isHoldable === true) {
        if (isButtonHolding) {
          this.setState({ isButtonHolding: false }); // eslint-disable-line
        } else {
          clearTimeout(this.holdTimeout);
          onButtonPress();
        }
      } else {
        onButtonPress();
      }
    };

    render() {
      const { buttonId } = this.props; // eslint-disable-line

      return (
        <WrappedComponent
          {...this.props}
          onHandleButtonPress={this.handleButtonPress}
          onHandleButtonRelease={this.handleButtonRelease}
        />
      );
    }
  };
}

export default masterButton;
