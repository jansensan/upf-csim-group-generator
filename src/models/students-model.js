import _ from 'lodash';
import signals from 'signals';

// services
import StudentsService from '../services/students-service.js';


class StudentsModel {
  constructor() {
    // properties
    this.hasFetched = false;
    this.data = [];

    // signals
    this.updated = new signals.Signal();
  }

  fetch() {
    return new Promise((resolve, reject) => {
      StudentsService
        .load()
        .then(response => {
          // parse json to array of objects
          this.data = JSON.parse(response);

          // order array by product names
          this.data = _.orderBy(this.data, ['firstName'], ['asc']);
          this.data.forEach(student => {
            student.isIncluded = true;
          });

          this.hasFetched = true;
          this.updated.dispatch();

          // resolve promise
          resolve();
        })
        .catch((error) => {
          this.hasFetched = true;
          reject({
            message: 'Unable to obtain data',
            error: error
          });
        })
    });
  }

  add(value) {
    this.data.push(value);
    this.updated.dispatch();
  }
}

// create and export singleton
let studentModel = new StudentsModel();
export default studentModel;
