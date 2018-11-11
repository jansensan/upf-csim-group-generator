import React, { Component } from 'react';

// models
import studentModel from '../../models/students-model';

// components
import AddStudentForm from '../add-student-form/add-student-form.jsx';
import Generator from '../generator/generator.jsx';
import StudentList from '../student-list/student-list.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isComponentMounted: false
    };

    studentModel.updated.add(this.onModelUpdated, this);
    studentModel.fetch();
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
            (studentModel.hasFetched) ?
            <div>
              <StudentList
                students={studentModel.data}
                hasIncludeOption={true}
              ></StudentList>
              <h3>Add a student</h3>
              <p>Is someone missing? Add them here with the following form:</p>
              <AddStudentForm></AddStudentForm>
            </div>
            :
            <p>Fetching students from server...</p>
          }
          <hr/>
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      isComponentMounted: true
    });
  }


  // methods definitions
  onModelUpdated() {
    if (!this.state.isComponentMounted) {
      return;
    }

    this.forceUpdate();
  }
}
