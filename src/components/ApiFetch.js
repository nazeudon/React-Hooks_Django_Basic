import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axiosを使うパターン
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setPosts(res.data);
    // });

    // fetchを使うパターン.
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((res) => res.json()) //Html形式で返ってくるのでjsonにする
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
