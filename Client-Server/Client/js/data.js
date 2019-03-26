import { Post } from './entities/post.js';
import { response } from './controller.js';

const fetchData = (onSuccess) => {
    $.get('http://127.0.0.1:3000', (response) => {

        const posts = new Post(
            response.id,
            response.title,
            response.body
        )

        onSuccess(JSON.parse(response));
    }
    );
}

export { fetchData }


