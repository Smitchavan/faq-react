import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Nav extends Component {
  render() {
    return (
      <Navb>
      <Text>FAQS</Text>
        <Ul>
          <Li>
            <Linke to="./">Home</Linke>
          </Li>
          <Li>---
            <Linke to="./contact">Contact</Linke>
          </Li>
        </Ul>
      </Navb>
    );
  } 
}
const Text=styled.text`
padding-left:20%;
font-size:2.5rem;
font-weight:3000;
text-decoration:underline;
`
const Linke=styled(Link)`
color:white;
text-decoration:none;
font-size:25px;



`



const Navb=styled.nav`
display:flex;
flex-direction:row;
padding:1.2rem;
background-color:cadetblue;

`
const Ul=styled.ul`
padding-left:15rem;
padding-top:1rem;
list-style:none;

display:flex
`

const Li=styled.li`
margin-left:5rem;

`