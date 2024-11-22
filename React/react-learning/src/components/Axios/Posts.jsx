import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  //   const postData = [
  //     {
  //       id: 1,
  //       title: "Dummy 1",
  //       body: "Body data 1",
  //     },
  //     {
  //       id: 2,
  //       title: "Dummy 2",
  //       body: "Body data 2",
  //     },
  //     {
  //       id: 3,
  //       title: "Dummy 3",
  //       body: "Body data 3",
  //     },
  //     {
  //       id: 4,
  //       title: "Dummy 4",
  //       body: "Body data 4",
  //     },
  //     {
  //       id: 5,
  //       title: "Dummy 5",
  //       body: "Body data 5",
  //     },
  //   ];
  const [posts, setPosts] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const getPostData = async () => {
    try {
      const res = await axios.get(API_URL, {
        timeout: 5000,
      });
      console.log("response", res);
      setPosts(res.data.slice(10, 20));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    // axios
    //   .get(API_URL)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // fetch(API_URL)
    //   .then((res) => res)
    //   .then((res) => {
    //     const data = res.json();
    //   })
    //   .catch((err) => console.log(err));

    getPostData();
  }, []);

  return (
    <div className="post-container">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
