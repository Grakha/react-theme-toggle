import React from 'react';
import { Segment } from "./Segment";
import { Heading } from "./Heading";
import { Placeholder } from "./Placeholder";
import { Divider}  from "./Divider";
import { Button } from "./Button";


export class Content extends React.Component {
    render() {
        return (
            <Segment>
                <Heading header="Summary" />
                <Placeholder />
                <Divider />
                <Button text="Tap on Me" styles="ui button"/>
            </Segment>
        );
    }
};