import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Note extends Component {
  render() {
    return (
      <div id = 'note-div'>Default Note</div>
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
