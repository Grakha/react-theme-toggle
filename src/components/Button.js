import React from 'react';


export class Button extends React.Component {
  render() {
      return (
          <button className={this.props.styles} type="button">
              { this.props.text }
          </button>
      );
  }
};