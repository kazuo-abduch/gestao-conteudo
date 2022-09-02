import React from 'react';

function PostCard(props) {
  const { title } = props;
  return (
    <div>
      { title }
    </div>
  )
}

export default PostCard;
