import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './FAQ.css'

export class FAQ extends Component {
    render() {
        return (
            <>
                <div className="faq-container">
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Question 1
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Answer 1</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                TAB 2
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </>
        );
    }
}

export default FAQ;