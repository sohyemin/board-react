import React, { useEffect, useState } from 'react'
import axios from "axios"; 

function PostList() {
    const BASE_URL = "https://localhost:8080/Board";

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getTodos();
    }, []);

    async function getTodos(){
        await axios // 다 받을 때까지 기다리는 것
        .get(BASE_URL)
        .then((res) => {
            console.log(res.data);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div>PostList</div>
  )
}

export default PostList