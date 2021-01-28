import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";


export class Heading extends React.Component {

    static contextType = ThemeContext;

    render() {
        return (
            <h4 className="ui header inverted">
                { this.props.header }
            </h4>
        );
    }
};