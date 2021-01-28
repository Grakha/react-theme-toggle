import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";


export class Segment extends React.Component {

    render() {

        const theme = this.context === 'light' ? '' : 'inverted';

        return (
            <div className={`ui segment ${theme}`}>
                { this.props.children }
            </div>
        );
    }
};

Segment.contextType = ThemeContext;