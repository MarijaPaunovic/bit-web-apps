let main = $('main');


const displayUsers = (users) => {
    //console.log(users);
    users.forEach(users => {
        main.append("<div class='" + `${users.gender}` + " user'><div><img class='avatar' src=" + `${users.picture}` + "></div><div><p>" + `${users.name} ` + "</p><p>" + `${users.email}` + "</p><p>" + `${users.dobDate}` + "</p></div></div>");
    });
}

export { displayUsers }


// main.append("<div class='user'><div><img class='avatar' src=" + `${users[1].picture}` + "></div><div><p>" + `${users[1].name.first} ${users[1].name.last}` + "</p><p>" + `${users[1].email}` + "</p><p>" + `${users[1].dobDate}` + "</p></div></div>");