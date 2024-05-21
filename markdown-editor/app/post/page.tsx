"use client"
// pages/post.js
import { useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';

const Post = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/savePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <MarkdownEditor content={content} setContent={setContent} />
      <button onClick={handleSubmit}>Save Post</button>
    </div>
  );
};

export default Post;
