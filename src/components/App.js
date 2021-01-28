import React from 'react';
import { Button } from "./Button";
import { Content } from "./Content";
import { Divider } from "./Divider";
import { Heading } from "./Heading";
import { Placeholder } from "./Placeholder";
import { Segment } from "./Segment";


export default class App extends React.Component {
    render() {
        return (
            <div>
                App
                <Button/>
                <Content/>
                <Divider/>
                <Heading/>
                <Placeholder/>
                <Segment/>
            </div>
        );
    }
};