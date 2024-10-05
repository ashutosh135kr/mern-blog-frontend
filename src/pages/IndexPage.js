import { useEffect, useState } from "react";
import { BACKEND_SERVER_URL } from "../Helper";
import Post from "../Post";

function IndexPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`${BACKEND_SERVER_URL}/post`).then(response => {
            response.json().then(posts => {
                // console.log(posts);
                setPosts(posts);
            });
        });
    }, []);


    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
            {/* <Post />
            <Post />
            <Post /> */}
        </>
    );

}

export default IndexPage;
