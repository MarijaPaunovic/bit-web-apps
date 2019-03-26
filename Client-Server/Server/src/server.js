

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const LoremIpsum = require("lorem-ipsum").LoremIpsum
    const postArray = []
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    class Post {
        constructor() {
            this.id = Math.floor(Math.random() * 100);
            this.title = lorem.generateWords(3);
            this.body = lorem.generateSentences(2);
        }

    }

    for (let i = 0; i < 10; i++) {
        let post = new Post()
        postArray.push(post)
    }


    res.end(JSON.stringify(postArray));

});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});