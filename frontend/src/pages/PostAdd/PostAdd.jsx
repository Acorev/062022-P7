import React, { useState, useContext } from 'react';

import './style.scss';
import AuthContext from '../../context/AuthContext';
import PostForm from '../../components/PostForm';
import Post from '../../models/postModel';

const PostAdd = () => {
  const { user } = useContext(AuthContext);

  const [userId] = useState(user.userId);
  const [post] = useState(new Post(userId));

  return (
    <div className='postadd'>
      <h2>Ajouter un post</h2>
      <PostForm post={post} isEditForm={false}></PostForm>
    </div>
  )
};

export default PostAdd;