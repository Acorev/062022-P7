import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import PostCard from '../../components/PostCard';
import PostService from '../../services/postService';
import iconAdd from '../../assets/add.svg';
import AuthContext from '../../context/AuthContext';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    PostService.getPosts().then(post => setPosts(post));
  }, []);
  return (
    <div>
      <div className='home'>
        {posts ? (posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))
        ) : (
          <>{logoutUser()}</>
        )}
      </div>
      <Link to={'/add'} className='home__add'>
        <img src={iconAdd} alt="add" />
      </Link>
    </div>
  )
}

export default Home