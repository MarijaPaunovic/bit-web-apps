import * as ui from './ui.js';
import * as data from './data.js';


const response = (posts) => {

    data.fetchData(function (posts) {

        ui.displayPosts(posts)

    })
}

export {
    response
}