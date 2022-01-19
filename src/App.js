import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>root</h1>
      <Left1 number={number}></Left1>
      <Right></Right>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>LEFT1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>LEFT2 : {props.number} </h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>LEFT3 : {props.number} </h1>
    </div>
  );
}

function Right(props) {
  return (
    <div>
      <h1>Right</h1>
    </div>
  );
}
