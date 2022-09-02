import React from 'react';

function PostCard(props) {
  const { title, content } = props;
  return (
    <div>
      <div>
        { title }
      </div>
      <div>
        { content }
      </div>
    </div>
  )
}

export default PostCard;
