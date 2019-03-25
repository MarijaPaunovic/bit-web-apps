/* 1.
const p1 = new Promise(function (resolve, reject) {
    const dataDates = new Date();
    Promise.resolve(dataDates).then(() => {
        return console.log(dataDates);
    });

})
*/

/* 2. */
// for (let id = 0; id < 100; id++) {

//     new Promise(function (resolve, reject) {

//         const delayInms = parseInt(Math.random() * 500)
//         setTimeout(() => {
//             resolve(delayInms + ", ID:" + id)
//         }, delayInms);

//     })
//         .then(function (result) {
//             console.log(result);
//         })
// }

/////// 2. - 3.
const allPromises = [];

for (let id = 0; id < 100; id++) {
    const myPromise = new Promise((resolve, reject) => {

        const delay = Number.parseInt(Math.random() * 500)
        setTimeout(() => {
            resolve(`Promise with ID:${id} executed after ${delay}ms`)
        }, delay);

    })
        .then((id) => {
            console.log(id);
        })
    allPromises.push(myPromise)
}

Promise
    .all(allPromises)
    .then((_) => {
        console.log('-----------------');
        console.log('All promises finished succesful!');
        console.log('-----------------');
    })
