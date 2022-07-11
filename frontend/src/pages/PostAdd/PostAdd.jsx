import React, { useState, useContext } from 'react';

import './style.scss';
import AuthContext from '../../context/AuthContext';
import PostForm from '../../components/PostForm';
import Post from '../../models/postModel';

const PostAdd = () => {
  const { user } = useContext(AuthContext);
  const [post] = useState(new Post(user.pseudo, user.userId));

  return (
    <div className='postadd'>
      <h2>Ajouter un post</h2>
      <PostForm post={post} isEditForm={false}></PostForm>
    </div>
  )
};

export default PostAdd;