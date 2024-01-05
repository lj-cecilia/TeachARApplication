import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';


export const Chat = () => {
    return (
        <InputGroup size="sm" className="Chat">
            <InputGroup.Text>Patient Name</InputGroup.Text>
            <FormControl placeholder="name or id"
                aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <InputGroup.Text>Patient Instructions</InputGroup.Text>
            <FormControl placeholder="you should..." aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <Button>Send</Button>
        </InputGroup>
    );
}