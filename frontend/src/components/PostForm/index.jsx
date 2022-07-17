import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss'
import PostService from '../../services/postService';
import AuthContext from '../../context/AuthContext';

const PostForm = ({ post, isEditForm }) => {

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    message: { value: post.message }
  });

  const [file, setFile] = useState('');

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField })
  };

  const onInputChangeHandle = (e) => {
    setFile(e.target.files[0])
  }

  // Soumision d'un post
  const handleSubmit = e => {
    e.preventDefault();
    post.message = form.message.value;

    isEditForm ? updatePost() : addPost();
  };

  // Ajout d'un nouveau poste
  const addPost = () => {
    PostService.addPost(post, file).then(() => navigate('/'));
  };

  // Editer un poste
  const updatePost = () => {
    PostService.updatePost(post, file).then(() => navigate('/'));
  };

  // Effacer un post
  const deletePost = () => {
    if (post._id) {
      PostService.deletePost(post._id).then(() => navigate('/'));
    }
  };

  const isAuth = user.role === 8471 || user.userId === post.userId;

  return (
    <form onSubmit={e => handleSubmit(e)} className='postform'>


      <div className='postform__image'>
        <label htmlFor="image" >Choisir une image</label>
        {file && (<span>{file['name']}</span>)}
        {!file && (<span>Pas d'image selectionnée</span>)}
        < input
          type="file"
          name="imageUrl"
          id="image"
          accept='image/*'
          onChange={e => onInputChangeHandle(e)}
        />
      </div>

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
        {isEditForm && (
          isAuth && (
            <>
              <button type='submit'>Modifier</button>
              <button onClick={() => deletePost()}>Supprimer</button>

            </>)
        )}

        {!isEditForm && (<button type='submit'>Ajouter</button>)}

      </div>
    </form>
  )
}

export default PostForm