import React, { useContext } from 'react';
import PostListContext from '../context/postListContext';
import PostCard from './PostCard';

function RenderPostList() {
  
  const { postListState, loading } = useContext(PostListContext)
  

  const renderPostList = () => {
    return (
      postListState.map((post) => {
        return (
          <PostCard
            title={ post.title }
            content={ post.content }
          />
        )
      })
    )
  }

  return (
    <div>
      { loading ? 'Loading' : renderPostList() }
    </div>
  )
}

export default RenderPostList;