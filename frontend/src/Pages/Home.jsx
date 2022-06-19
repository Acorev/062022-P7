import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import PostService from '../services/postService';
import iconAdd from '../assets/add.svg';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getPosts().then(post => setPosts(post));
  }, []);

  return (
    <div>
      <div className='home'>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))};
      </div>
      <Link to={'/add'} className='home__add'>
        <img src={iconAdd} alt="add" />
      </Link>
    </div>
  )
}

export default Home