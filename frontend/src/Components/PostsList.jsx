import React, { useContext } from 'react';
import PostListContext from '../context/postListContext';
import PostCard from './PostCard';

function RenderPostList() {
  
  const { postListState, loading } = useContext(PostListContext)
  

  const renderPostList = () => {
    console.log(postListState);
    console.log(loading);
    postListState.map((post) => {
      return (
        <div>
          <PostCard title={ post.title }/>
        </div>
      )
    })
  }

  return (
    <div>
      { loading ? 'Loading' : renderPostList() }
    </div>
  )
}

export default RenderPostList;