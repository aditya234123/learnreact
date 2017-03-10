import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Note extends Component {
  constructor(){
    super();{
      this.state = {display: true};
    }
  }
  render() {
    return (
      <div id = 'note-div'><p id="note-id">Default Note</p></div>
      //console.log(this.state.display);
    );
  }
}

class AddButton extends Component {
  render() {
    return (
      <button id = "add-button">Add</button>
    );
  }
}

class RemoveButton extends Component {
  render() {
    return (
      <button id = "remove-button">Remove</button>
    );
  }
}

module.exports = {
  Note,
  AddButton,
  RemoveButton
}
