import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./FAQ.css";

export class FAQ extends Component {
  render() {
    return (
      <Accordion className="faq-accordion">
        <div className="faq-cards">

        <h1 className="title-faq"> FAQ </h1>

        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              What is the purpose of using Wiser?
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Wiser is a cognitive training application which helps you train various different
                parts of your brain to improve certain skills. The games rely on repetitive 
                training to see a visible improvement.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              How does the Chalkboard Challenge help you improve?
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                The Chalkboard Challenge is a game designed around improving
                your number sense and reaction time. By playing this game
                repeatedly you will become better at recognizing, comparing,
                analyzing and then coming to a conclusion based on the results.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              How does the Match Pokemon help you improve?
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="2">
              <Card.Body>
                The Match Pokemon game is designed to help you improve your
                cognitive ability by improving your memory. By playing this game
                repeatedly you will test your ability to remember the position
                of multiple different characters and then recall back to it, all
                of which will train your memory.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              How does the Quizlet game help you improve?
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="3">
              <Card.Body>
                The Quizlet game is designed to help you improve your cognitive
                ability by improving your memory, and reasoning abilities. This
                game takes the skills learn from the other two games and
                challenges you to put them all to use. By playing this game
                repeatedly you will test your ability to remember not only
                information on a variety of topics, but also how to reason which
                answers are definitely right or wrong.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    );
  }
}

export default FAQ;
