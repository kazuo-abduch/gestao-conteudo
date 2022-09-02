import React, { useState, useEffect } from 'react';
import PostListContext from './postListContext';
import getAllPosts from '../api/api';

function PostListProvider({ children }) {
  const [postListState, setPostList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function requestPosts() {
      getAllPosts().then((response) => {
        setPostList(response);
        setLoading(false);
      })
    };
    requestPosts();
  }, [])

  return (
    <PostListContext.Provider
      value={ {
        postListState,
        setPostList,
        loading,
        setLoading,
      } }
    >
      { children }
    </PostListContext.Provider>
  )
};

export default PostListProvider;