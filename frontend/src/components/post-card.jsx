import React from 'react'
import '../css/post-card.css'
import formatDate from '../helpers/format-date'

export default function PostCard({ post }) {
  return (
    <main className="card">
      <header className='card-header card-header-avatar'>
        <img className='card-avatar' src='img/avatar.png' alt="avatar" />
        <div className="card-title">{post.name}</div>
        <div className="card-date">{formatDate(post.created)}</div>
      </header>
      <div className="card-body">
        <p>
          {post.picture ? (<img className='fullwidth' src={post.picture} alt="arbre" />) : null}
        </p>
        <p>
          {post.message}
        </p>
      </div>
      <footer className='card-footer'>
        <div className="card-like"><i className='card-like-icon material-icons'>thumb_up</i><p>20</p></div>
        <div className="card-edit"><i className='card-edit-icon material-icons'>edit</i></div>
      </footer>
    </main>
  )
}