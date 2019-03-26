let main = $('main');


const displayPosts = (posts) => {
    //console.log(users);
    posts.forEach(posts => {
        main.append("<div class='" + `${posts.id}` + "'><p>" + `${posts.title} ` + "</p><p>" + `${posts.body}` + "</p></div>");
    });
}

export { displayPosts }
