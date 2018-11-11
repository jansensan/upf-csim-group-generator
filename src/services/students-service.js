// public api
let StudentsService = {
  load: load,
  formatNameForId: formatNameForId,
};
export default StudentsService;


// public methods definitions
function load() {
  let url = 'services/load.php';

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.timeout = 5000;
    xhr.url = url;
    xhr.onload = () => {
      resolve(xhr.responseText);
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.ontimeout = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

function formatNameForId(firstName, lastName) {
  let fName = firstName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  let lName = lastName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u0020]/g, '');

  return fName.charAt(0).toLowerCase() + lName;
}
