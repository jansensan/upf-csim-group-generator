import _ from 'lodash';
import React, { Component } from 'react';

// model
import studentModel from '../../models/students-model';

// styles
require('./add-student-form.scss');


export default class AddStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  // react methods definitions
  render() {
    return (
      <div className="add-student-form">
        <form id="addStudentForm">
          <label htmlFor="firstNameInput">First Name:</label>
          <input
            type="text"
            name="firstNameInput"
            id="firstNameInput"
            value={this.state.firstName}
            onChange={this.onInputsChanged.bind(this)}
          />

          <label htmlFor="lastNameInput">Last Name:</label>
          <input
            type="text"
            name="lastNameInput"
            id="lastNameInput"
            value={this.state.lastName}
            onChange={this.onInputsChanged.bind(this)}
          />
        </form>
        <button
          className="btn-primary btn-add"
          onClick={this.onStudentAdded.bind(this)}
        >Add student</button>
      </div>
    );
  }

  // methods definitions
  clearInput() {
    this.state.firstName = '';
    this.state.lastName = '';
    this.forceUpdate();
  }

  onInputsChanged() {
    this.state.firstName = document.getElementById('firstNameInput').value;
    this.state.lastName = document.getElementById('lastNameInput').value;
    this.forceUpdate();
  }

  onStudentAdded() {
    studentModel.add({
      profilePic: '',
      firstName: _.startCase(this.state.firstName),
      lastName: _.startCase(this.state.lastName),
      phone: '',
      email: '',
      country: '',
      isIncluded: true,
    });
    this.clearInput();
    this.forceUpdate();
  }
}