import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePage from "./components/singlePage";
import { Link } from "react-router-dom";

const Books = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {posts.slice(0, 5).map((item,index) => (
        <Link to={`/books/singlePage/:${item.id}`} key={item.id}>
          <SinglePage title={item.title} body={item.body} id={index} />
        </Link>
      ))}
    </div>
  );
};

export default Books;
