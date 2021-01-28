import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";


export class Button extends React.Component {

    static contextType = ThemeContext;

    render() {

        const theme = this.context === 'light' ? '' : 'inverted';

        return (
            <button className={this.props.styles + ` ${theme}`} type="button">
                { this.props.text }
            </button>
        );
  }
};