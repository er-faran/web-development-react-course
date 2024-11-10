import { useEffect, useState } from "react";
import usePostData from "../hooks/usePostsData";
import SomethingWentWrong from "./SomethingWentWrong";

const LearningDay7 = () => {
  const [data, isAPIError] = usePostData();

  // const [postData, setPostData] = useState([]);
  // Asyncronous Operation

  // const response = fetch("https://jsonplaceholder.typicode.com/posts");

  // console.log(response);

  // then catch
  // response
  //   .then((res) => {
  //     console.log("then block", res);
  //     return res.json();
  //   })
  //   .then((json) => {
  //     console.log("data", json);
  //     return json;
  //   })
  //   .catch((err) => {
  //     console.log("error block", err);
  //   })
  //   .finally(() => {
  //     console.log("finally block");
  //   });

  // async await
  // const getData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const data = await response.json();
  //     setPostData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("finally");
  //   }
  // };

  // useEffect(() => {
  //   // making api call for getting posts
  //   getData();
  // }, []);

  // Synchonous Operaton
  // const a = 10;
  // const b = 20;

  // const result = a + b;
  // console.log(result);

  return (
    <>
      <h2>Learning Custum Hooks / Async Await / Promises / Fetch API</h2>

      <br />

      <h2>Posts Data</h2>
      {isAPIError ? (
        <SomethingWentWrong />
      ) : (
        data?.map((item, index) => {
          return (
            <div className="post-item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default LearningDay7;
