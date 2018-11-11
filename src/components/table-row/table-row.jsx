import React, { Component } from 'react';

import FlagService from '../../services/flag-service';
import StudentsService from '../../services/students-service';


require('./table-row.scss');


export default class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.studentModel;
  }

  // react methods definitions
  render() {
    return (
      <tr className="table-row">
        {
          (this.props.hasIncludeOption) &&
          <td className="include-in-shuffle">
            <input
              type="checkbox"
              id={this.getId()}
              name={this.getId()}
              checked={this.state.isIncluded}
              onChange={this.onCheckboxUpdated.bind(this)}
            />
          </td>
        }
        <td className="profile-pic">
          <a href={this.getProfilePicURL()}>
            <img
              src={this.getProfilePicURL()}
              width="32" height="32"
            />
          </a>
        </td>
        <td className="first-name">{this.state.firstName}</td>
        <td className="last-name">{this.state.lastName}</td>
        <td className="country-flag">{FlagService.getFlag(this.state.country)}</td>
      </tr>
    );
  }


  // methods definitions
  getProfilePicURL() {
    return './images/' + this.state.profilePic;
  }

  getId() {
    return StudentsService.formatNameForId(
      this.state.firstName,
      this.state.lastName
    );
  }



  onCheckboxUpdated() {
    this.state.isIncluded = !this.state.isIncluded;
    this.forceUpdate();
  }
}
