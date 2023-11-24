import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
    </>
  );
}

export default Home