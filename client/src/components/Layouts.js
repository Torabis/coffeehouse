import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container style={{marginTop: "40px"}}>
            {props.children}
    </Container>
)