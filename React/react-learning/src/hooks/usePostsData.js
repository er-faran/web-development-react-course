import { useEffect, useState } from "react";

const usePostData = () => {
  const [postData, setPostData] = useState([]);
  const [isAPIError, setIsAPIError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      try {
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log(error);
        setIsAPIError(true);
      }
    } catch (error) {
      console.log(error);
      setIsAPIError(true);
    } finally {
      console.log("finally");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [postData, isAPIError];
};

export default usePostData;
