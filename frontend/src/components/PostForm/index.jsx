import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss'
import PostService from '../../services/postService';

const PostForm = ({ post, isEditForm }) => {
  const [form, setForm] = useState({
    message: { value: post.message }
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField })
  };

  const handleSubmit = e => {
    e.preventDefault();
    post.message = form.message.value;

    isEditForm ? updatePost() : addPost();
  };

  const addPost = () => {
    PostService.addPost(post).then(() => navigate('/'));
  };

  const updatePost = () => {
    PostService.updatePost(post).then(() => navigate('/'));
  };

  const deletePost = () => {
    if (post._id) {
      PostService.deletePost(post._id);
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className='postform'>
      <textarea
        className='postform__area'
        name="message"
        id="message"
        rows={'10'}
        maxLength={'500'}
        value={form.message.value}
        onChange={e => handleInputChange(e)}>
      </textarea>
      <div className='postform__bp'>
        <button type='submit'>Modifier</button>
        <button onClick={() => deletePost()}>Supprimer</button>
      </div>
    </form>
  )
}

export default PostForm