const $body = document.querySelector('body');
const responses = []

for (let i = 0; i < 15; i++) {
    const response = fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(dogData => dogData.message)
    // .then(dogUrl => {
    //     const $img = document.createElement('img');
    //     $img.setAttribute('src', dogUrl);
    //     $body.appendChild($img);
    // });
    responses.push(response)
}
console.log(responses);

Promise.all(responses)
    .then((allImages) => {
        allImages.forEach(dogUrl => {

            const $img = document.createElement('img');
            $img.setAttribute('src', dogUrl);

            $body.appendChild($img);
        })
    })

// const dog = () => {
//     const dogArray = [];
//     for (let i = 0; i < 15; i++) {

//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(response => response.json())
//             .then(info => dogArray.push(info))
//     }
//     return dogArray;
//     // return dogArray.forEach(dogArray => {
//     //     button.append("<img src=" + `${dogArray.message}` + ">")
//     // });
// };

// console.log(dog());

////////////////////////////////////////////////////////////
// var dogsPics;

// function setImg(dogsRandom) {
//     var img = document.createElement('img');
//     img.style.width = '400px'
//     img.style.height = '300px'
//     img.style.margin = '20px'
//     var bodyOne = document.body
//     img.setAttribute('src', dogsRandom.message)
//     bodyOne.appendChild(img);
//     console.log(dogsRandom);
// }
// var btn = document.querySelector('.btnImg')
// btn.style.display = 'block'
// btn.addEventListener('click', function () {
//     var dogRequest = new XMLHttpRequest();
//     dogRequest.open("GET", " https://dog.ceo/api/breeds/image/random");
//     dogRequest.onload = function () {
//         if (dogRequest.status >= 200 && dogRequest.status < 400) {
//             dogsPics = JSON.parse(dogRequest.responseText);
//             setImg(dogsPics);
//         }
//     }
//     dogRequest.send();
// })
