import axios, { AxiosResponse } from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Post {
    postId: number;
    id: number;
    title: string;
    body: string;
}

interface Comment {
    postId: number;
    id: number;
    email: string;
    body: string;
}

interface PostWithComments{
    postId: number;
    title: string;
    comments?: Comment[];
}

export async function getPosts(userId: number | string): Promise<PostWithComments[]> {
    try {
        const postsResponse: AxiosResponse<Post[]> = await axios.get(POST_URL, {
            params: { userId }
        });

        const commentsResponse: AxiosResponse<Comment[]> = await axios.get(COMMENTS_URL);

        const postsWithComments: PostWithComments[] = postsResponse.data.map((post: Post)=> {

            return {
                postId : post.id,
                title : post.title,
                comments: commentsResponse.data
                            .filter((comment: Comment) => comment.postId === post.id)
                            .map(({ postId, id, email, body }: Comment) => ({ postId, id, email, body }))
            };
        });

        return postsWithComments;
    } catch (error) {
        throw error;
    }
}
