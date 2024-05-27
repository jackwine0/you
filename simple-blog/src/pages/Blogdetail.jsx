import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <button>
        <Link to="/blog">Back</Link>
      </button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogDetail;
