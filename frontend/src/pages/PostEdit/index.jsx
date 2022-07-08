import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.scss'
import PostForm from '../../components/PostForm';
import PostService from '../../services/postService';

const PostEdit = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    PostService.getPost(id).then(post => setPost(post));
  }, [id]);

  return (
    <div className="postedit">
      {post ? (
        <div>
          <h2>Editer {post.name}</h2>

          <PostForm post={post} isEditForm={true}></PostForm>
        </div>
      ) : (
        <h4>Aucun post à afficher !</h4>
      )}
    </div>
  )
}

export default PostEdit