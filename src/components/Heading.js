import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";


export class Heading extends React.Component {

    static contextType = ThemeContext;

    render() {
        const theme = this.context === 'light' ? '' : 'inverted';

        return (
            <h4 className={`ui header ${theme}`}>
                { this.props.header }
            </h4>
        );
    }
};