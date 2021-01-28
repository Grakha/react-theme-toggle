import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";


export class Divider extends React.Component {

    static contextType = ThemeContext;

    render() {

        const theme = this.context === 'light' ? '' : 'inverted';

        return (
            <div className={`ui divider ${theme}`}></div>
        );
    }
};