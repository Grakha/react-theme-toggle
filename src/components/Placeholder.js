import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

export class Placeholder extends React.Component {

    static contextType = ThemeContext;

    render() {

        const theme = this.context === 'light' ? '' : 'inverted';

        return (
            <div className={`ui active placeholder ${theme}`}>
                <div className="image header">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="paragraph">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>    
        );
    }
};