import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.scss';
import AuthContext from '../../context/AuthContext';
import PostService from '../../services/postService';
import formatDate from '../../helpers/format-date';
import Avatar from '../../assets/profile.svg';
import iconEdit from '../../assets/edit.svg';
import iconLike from '../../assets/thumb.svg';

const PostCard = ({ post }) => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);


    const isliked = () => {

        if (post.likeId.indexOf(user.userId) !== -1) {
            return false;
        } else if (user.userId === post.userId) {
            return false;
        }
        return true;
    }

    const likeClick = () => {
        post.likes += 1;
        post.likeId = user.userId;
        PostService.updatePost(post).then(() => navigate('/'));
    }

    return (
        <main className="postcard">
            <header className="postcard__header">
                <img src={Avatar} alt="avatar" className="postcard__avatar" />
                <div className="postcard__title">{post.pseudo}</div>
                <div className="postcard__date">{formatDate(post.created)}</div>
            </header>
            <div className="postcard__body">
                <p>

                </p>
                <p>
                    {post.message}
                </p>
            </div>
            <footer className="postcard__footer">
                <div className="postcard__like">
                    {isliked() && <img className='postcard__likeUp' onClick={likeClick} src={iconLike} alt='like' />}
                    {!isliked() && <img src={iconLike} alt='like' />}
                    <p>{post.likes}</p>
                </div>
                <div className='postcard__editdel'>
                    <Link to={`/edit/${post._id}`}>
                        <img src={iconEdit} alt='edit' />
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default PostCard