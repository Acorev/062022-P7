import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import formatDate from '../../helpers/format-date';
//import PostService from '../../services/postService';
import Avatar from '../../assets/profile.svg';
import iconEdit from '../../assets/edit.svg';
import iconLike from '../../assets/thumb.svg';
import iconDel from '../../assets/delete.svg';

const PostCard = ({ post }) => {
    //const navicate = useNavigate();

    const deletePost = event => { }
    /*const cardItem = event.target.closest('.postcard')
    const dataId = cardItem.dataset.id;
    if (post.id == dataId) {
        PostService.deletePost(post);
        navicate('/', { replace: true });
    }
};*/

    return (
        <main className="postcard" data-id={post.id}>
            <header className="postcard__header">
                <img src={Avatar} alt="avatar" className="postcard__avatar" />
                <div className="postcard__title">{post.name}</div>
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
                    <img src={iconLike} alt='like' />
                    <p>20</p>
                </div>
                <div className='postcard__editdel'>
                    <img src={iconDel} alt="del" onClick={(e) => deletePost(e)} />
                    <Link to={`/edit/${post._id}`}>
                        <img src={iconEdit} alt='edit' />
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default PostCard