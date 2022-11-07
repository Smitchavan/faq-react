import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./counter";

export default class contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dataa: 0,
    };
  }
  handleUpdate = () => {
    this.setState({
      dataa: this.state.dataa + 1,
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <div>
        <h1>
          <p align="center">Contact Information</p>
        </h1>
        <Form>
          <Int
            placeholder="Name"
            value={this.state.name}
            onChange={(e) =>
              this.setState({ ...this.state, name: e.target.value })
            }
          ></Int>
          <Int
            placeholder="Email"
            value={this.state.email}
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
          ></Int>
          <Btn onClick={() => this.handleUpdate()}>Submit</Btn>
          <div><Counter></Counter>
            <strong> {this.state.dataa}
            </strong>
          </div>
        </Form>
      </div>
    );
  }
}
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
const Int = styled.input`
  margin: 1.5rem;
  padding: 1rem;
  width: 20rem;
  border-radius: 5px;
`;

const Btn = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  background-color: purple;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  width: 10rem;
  color: white;
`;
