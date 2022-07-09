import React, { useState } from 'react';

import './style.scss';
import PostForm from '../../components/PostForm';
import Post from '../../models/postModel';

const PostAdd = () => {
  const [id] = useState(new Date().getTime());
  const [post] = useState(new Post(id));
  return (
    <div className='postadd'>
      <h2>Ajouter un post</h2>
      <PostForm post={post} isEditForm={false}></PostForm>
    </div>
  )
};

export default PostAdd;