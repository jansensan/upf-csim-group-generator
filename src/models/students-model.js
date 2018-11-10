import _ from 'lodash';

// services
import StudentsService from '../services/students-service.js';


class StudentsModel {
  constructor() {
    this.hasFetched = false;
    this.data = [];
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

          // resolve promise
          this.hasFetched = true;
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
}

// create and export singleton
let studentModel = new StudentsModel();
export default studentModel;
