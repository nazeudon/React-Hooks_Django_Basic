import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);
  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // axiosを使うパターン
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setPosts(res.data);
    // });

    // fetchを使うパターン.
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json()) //Html形式で返ってくるのでjsonにする
      .then((data) => {
        setPosts(data);
      });
  }, [clicked, id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(evt) => setId(evt.target.value)}
      ></input>
      <br />
      <button type="button" onClick={handlerClicked}>
        Get Post
      </button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ApiFetch;
