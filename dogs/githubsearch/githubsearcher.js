var search = $("input");
var result = $('.result');
var imgRes;
var imgUser;

$("form").on("submit", function (event) {
    event.preventDefault();

    $.ajax({
        url: "https://api.github.com/search/users?q=" + search.value
    }).done(function (url) {
        for (var i = 0; i < url.items.length; i++) {
            imgRes = url.items[i].avatar_url;
            imgUser = document.createElement('img');
            imgUser.style.margin = '10px';
            imgUser.style.width = '300px';
            imgUser.style.height = '300px';
            imgUser.src = imgRes;
            result.append(imgUser);

            console.log(url)
        }
        search.value = ''
    });
});
