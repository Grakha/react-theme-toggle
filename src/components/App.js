import React from 'react';
import { Content } from "./Content";
import { Button } from "./Button";


class App extends React.Component {

    state = { theme: 'light' };

    render() {
        return (
            <div className="ui container">
                <div className="ui column grid">
                    <div className="row">
                        <div className="wide column">
                            <div className="ui basic segment">
                                <Button text="Toggle Theme" styles="ui secondary button right floated"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="wide column">
                            <Content />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default  App;