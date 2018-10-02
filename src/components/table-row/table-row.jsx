import React, { Component } from 'react';
import FlagService from '../../services/flag-service';


require('./table-row.scss');


export default class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  // react methods definitions
  render() {
    return (
      <tr className="table-row">
        <td className="first-name">{this.props.firstName}</td>
        <td className="last-name">{this.props.lastName}</td>
        <td className="phone">{this.props.phone}</td>
        <td className="email">
          <a href="mailto:{this.props.email}">{this.props.email}</a>
        </td>
        <td className="country-code">{this.props.country}</td>
        <td className="country-flag">{FlagService.getFlag(this.props.country)}</td>
      </tr>
    );
  }

  // methods definition
  getClassName(key) {
    let className = "table-row ";
    // let addition = (key % 2 === 0) ? "even" : "odd";
    // let addition = key.toString();
    return className.concat(key);
  }
}
