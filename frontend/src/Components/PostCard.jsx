import React from 'react';
import './PostCard.css';

function PostCard(props) {
  const { title, content } = props;
  return (
    <div>
      <div className='title'>
        { title }
      </div>
      <div className='content'>
        { content }
      </div>
    </div>
  )
}

export default PostCard;
