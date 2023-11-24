import React from 'react'
const SinglePage = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.id}</h2>
      <p>{props.body}</p>
      <hr />
      <hr />
      <hr />
    </>
  );
}

export default SinglePage