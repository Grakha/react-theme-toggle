import React from 'react';
import { Content } from "./Content";
import { BasicButton } from "./BasicButton";
import { ThemeContext } from "../contexts/ThemeContext";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = { theme: 'inverted' };
    }


    toggleTheme() {
        if(this.state.theme === 'light') {
            this.setState({ theme: 'inverted' });
        } else {
            this.setState({ theme: 'light' });
        }
    }


    render() {

        return (
            <div className="ui container">
                <div className="ui column grid">
                        <div className="row">
                            <div className="wide column">
                                <div className="ui basic segment">
                                    <BasicButton
                                        onClick={this.toggleTheme}
                                        text="Toggle Theme"
                                        styles="ui button right floated"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wide column">
                                <ThemeContext.Provider value={this.state.theme}>
                                    <Content />
                                </ThemeContext.Provider>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
};

export default  App;