import React from 'react';


export class BasicButton extends React.Component {

    state = { btnColor: 'black' }

    onChangeBgCgolor() {
        if(this.state.btnColor === 'black') {
            this.setState({ btnColor: 'black basic'});
        } else {
            this.setState({ btnColor: 'black' });
        }
    }

    render() {

        return (
            <button
                onClick={() => {
                    this.props.onClick();
                    this.onChangeBgCgolor();
                }}
                className={this.props.styles + ` ${this.state.btnColor}`}
                type="button"
            >{ this.props.text }
            </button>
        );
  }
};