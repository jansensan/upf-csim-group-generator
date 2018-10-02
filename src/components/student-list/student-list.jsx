import React, { Component } from 'react';

// components
import TableRow from '../table-row/table-row.jsx';


require('./student-list.scss');


export default class StudentList extends Component {
  constructor(props) {
    super(props);
  }

  // react methods definitions
  render() {
    return (
      <div className="student-list">
        <table cellSpacing="0" cellPadding="0">
          <tr>
            <th className="first-name">First Name</th>
            <th className="last-name">Last Name</th>
            <th className="phone">Phone</th>
            <th className="email">Email</th>
            <th className="country-code">Country</th>
            <th className="country-flag">Flag</th>
          </tr>
        {
          this.props.students.map(
            (student) =>
              <TableRow
                firstName={student.firstName}
                lastName={student.lastName}
                phone={student.phone}
                email={student.email}
                country={student.country}
              ></TableRow>
          )
        }
        </table>
      </div>
    );
  }
}
