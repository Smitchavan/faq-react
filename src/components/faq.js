import React, { Component } from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
export default class faq extends Component {
  render() {
    return (
      <Accordione>
        {this.props.data.map((content) => (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>                  {content.question}
              </Accordion.Header>
              <Accordion.Body>
              {content.answer}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </Accordione>
    );
  }
}

const Accordione = styled.div`
  width: 85rem;
  padding-left: 12rem;
  padding-top: 2rem;
`;
