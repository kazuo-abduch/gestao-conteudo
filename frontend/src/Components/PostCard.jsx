import React from 'react';
import { Link } from 'react-router-dom';

function PostCard(props) {
  const { title, content, index } = props;
  return (
    <Link to={ `/update/${ index }` }>
      <div>
        { title }
      </div>
      <div>
        { content }
      </div>
    </Link>
  )
}

export default PostCard;
