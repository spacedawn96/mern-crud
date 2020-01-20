import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Addpost from './Addpost';

function Main() {
  const posts = useSelector(state => state.post);
  return (
    <div>
      <Addpost />
      <h2>Post</h2>
      {posts.length &&
        posts.map(post => {
          return (
            <div key={post._id}>
              <hr />
              <h4>
                <Link to={`/post/${post._id}`}>{post.title}</Link>
              </h4>
              <small>id: {post._id}</small>
            </div>
          );
        })}
    </div>
  );
}

export default Main;
