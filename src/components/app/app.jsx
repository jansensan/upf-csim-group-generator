import React, { Component } from 'react';

// models
import studentModel from '../../models/students-model';

// components
import Generator from '../generator/generator.jsx';
import StudentList from '../student-list/student-list.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: studentModel,
      students: []
    };

    this.state.model
      .fetch()
      .then((response) => {
        this.setState({
          students: this.state.model.data
        });
      })
      .catch(error => {
        throw new Error(
          'Error initializing the application: ' +
          'Unable to fetch students data from server'
        );
      });
  }

  // react methods definitions
  render() {
    return (
      <div className="app">
        <section>
          <h2>Group Generator Options</h2>
          <Generator></Generator>
          <hr/>
        </section>
        <section>
          <h2>All Students</h2>
          {
            this.state.model.hasFetched ?
            <StudentList
              students={this.state.students}
            ></StudentList>
            : <p>Fetching students from server...</p>
          }
          <hr/>
        </section>
      </div>
    );
  }
}
