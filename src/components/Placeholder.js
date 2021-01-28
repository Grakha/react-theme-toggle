import React from 'react';


export class Placeholder extends React.Component {
    render() {
        return (
            <div className="ui active placeholder inverted">
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