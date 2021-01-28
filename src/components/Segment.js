import React from 'react';


export class Segment extends React.Component {
    render() {
        return (
            <div className="ui segment inverted">
                { this.props.children }
            </div>
        );
    }
};