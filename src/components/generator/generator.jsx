import _ from 'lodash';
import React, { Component } from 'react';

// models
import studentModel from '../../models/students-model';

// components
import StudentList from '../student-list/student-list.jsx';


require('./generator.scss');


export default class Generator extends Component {
  constructor(props) {
    super(props);

    // create state
    this.state = {
      numGroups: 1,
      groups: []
    };

    // bind to proper "this"
    this.generateGroup = this.generateGroup.bind(this);
    this.resetGroups = this.resetGroups.bind(this);
    this.onInputChanged = this.onInputChanged.bind(this);
  }

  // react methods definitions
  render() {
    return (
      <div className="generator">
        {
          (studentModel.hasFetched) ?
          <div>
            <div>
              <label
                htmlFor="numGroups"
              >Number of groups:</label>
              <input
                id="numGroups"
                className="num-groups-input"
                type="number"
                min="1"
                max={studentModel.data.length}
                value={this.state.numGroups}
                onChange={this.onInputChanged}
              />
              <button
                className="btn-primary btn-generate"
                onClick={this.generateGroup}
              >Generate groups</button>
              <button
                className="btn-primary btn-reset"
                onClick={this.resetGroups}
              >Reset groups</button>
            </div>
            <div>
              {
                this.state.groups.map(
                  (group, i) =>
                    <div key={i}>
                      <h3>Group {i + 1}</h3>
                      <StudentList
                        students={group}
                      ></StudentList>
                    </div>
                )
              }
            </div>
          </div>
          : <p>Initializing...</p>
        }
      </div>
    );
  }


  // methods definitions
  generateGroup() {
    let shufflable = _.filter(
      studentModel.data,
      {isIncluded: true}
    );

    // shuffle students list
    let shuffled = _.shuffle(shufflable);

    // create empty groups
    let groups = [];
    for (let i = 0; i < this.state.numGroups; i++) {
      groups.push([]);
    }

    // go through shuffled student list and assign to group
    let groupIndex = 0;
    while (shuffled.length) {
      // add student to group
      let student = shuffled.pop();
      groups[groupIndex].push(student);

      // prepare index for next iteration
      groupIndex++;
      if (groupIndex >= this.state.numGroups) {
        groupIndex = 0;
      }
    }

    // update state
    this.setState({groups: groups});
  }

  resetGroups() {
    // update state
    this.setState({groups: []});
  }

  // event handlers
  onInputChanged(event) {
    this.setState({numGroups: event.target.value});
  }
}
