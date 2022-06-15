import React, { useEffect, useState } from 'react'
import POSTS from '../data/posts'
import PostCard from '../components/post-card'

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(POSTS);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="colomn">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
