// public api
let StudentsService = {
  load: load
};
export default StudentsService;


// public methods definitions
function load() {
  let url = 'services/load.php';

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
