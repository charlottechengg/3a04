import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './FAQ.css'

export class FAQ extends Component {
    render() {
        return (
            <>
                <div className="faq-container">
                    <Accordion className="faq-accordion">
                        <div className="faq-cards">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    How does the Chalkboard Challenge help you improve?
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        The Chalkboard Challenge is a game designed around improving your number sense and reaction time.
                                        By playing this game repeatedly you will become better at recognizing, comparing, analyzing and 
                                        then coming to a conclusion based on the results.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    How does the Match Pokemon help you improve?
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        The Match Pokemon game is designed to help you improve your cognitive ability by improving your memory.
                                        By playing this game repeatedly you will test your ability to remember the position of multiple different
                                        characters and then recall back to it, all of which will train your memory.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                    </Accordion>
                </div>
            </>
        );
    }
}

export default FAQ;