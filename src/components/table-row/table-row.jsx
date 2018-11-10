import React, { Component } from 'react';

import FlagService from '../../services/flag-service';
import StudentsService from '../../services/students-service';


require('./table-row.scss');


export default class TableRow extends Component {
  constructor(props) {
    super(props);
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
              checked={this.props.studentModel.isIncluded}
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
        <td className="first-name">{this.props.firstName}</td>
        <td className="last-name">{this.props.lastName}</td>
        <td className="country-flag">{FlagService.getFlag(this.props.country)}</td>
      </tr>
    );
  }


  // methods definitions
  getProfilePicURL() {
    return './images/' + this.props.profilePic;
  }

  getId() {
    return StudentsService.formatNameForId(
      this.props.firstName,
      this.props.lastName
    );
  }



  onCheckboxUpdated() {
    this.props.studentModel.isIncluded = !this.props.studentModel.isIncluded;
    this.forceUpdate();
  }
}
