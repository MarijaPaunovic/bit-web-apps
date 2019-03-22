import { fetchData } from './data.js';
import { displayUsers } from './ui.js'

const response = (data) => {
    displayUsers(data);
}

const init = () => {
    console.log('Init...');
    fetchData(response);

}

export { init, response }