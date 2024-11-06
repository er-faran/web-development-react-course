import { useEffect, useState } from "react";

const usePostData = () => {
  const [postData, setPostData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPostData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [postData];
};

export default usePostData;
