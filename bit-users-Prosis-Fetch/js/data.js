import { displayUsers } from './ui.js'
import { response } from './app.js'
import UserObj from './entities/entitiesUser.js'

const fetchData = () => {

    const fetchPromise = fetch('https://randomuser.me/api?results=15')
        .then((response) => {

            return response.json()
        })
        .then((data) => {
            const obj = data.results.map(elem => (
                new UserObj(
                    elem.gender,
                    elem.name,
                    elem.email,
                    elem.dob.date,
                    elem.picture.thumbnail,
                    elem.login.username,
                )
            ))
            // console.log(obj)
            return obj;

        })
    console.log(fetchPromise)
    return fetchPromise;
}

// const fetchData = () => {
//     $.get({
//         url: 'https://randomuser.me/api?results=15',
//         dataType: 'json',
//         success: function (data) {
//             const obj = data.results.map(elem => (
//                 new UserObj(
//                     elem.gender,
//                     elem.name,
//                     elem.email,
//                     elem.dob.date,
//                     elem.picture.thumbnail,
//                     elem.login.username,
//                 )
//             ))
//             response(obj);
//         }
//     });
// }

export { fetchData }