import React, { useEffect, useState } from 'react'
import axios from "axios"; 
import { Link } from 'react-router-dom';

function PostListComponent() {
    const BASE_URL = "http://localhost:8080/Board";

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts(){
        await axios // 다 받을 때까지 기다리는 것
        .get(BASE_URL)
        .then((res) => {
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <>
        <div>PostList</div>
        {posts.map((post) => {
            return <div key={post.id}>
                <Link to={'/'}>{post.title} {post.userName} {post.createdAt}</Link><br/>
            </div>;
        })}
    </>
  )
}

export default PostListComponent