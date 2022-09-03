import React, { useState } from 'react';
import PostListContext from './postListContext';

function PostListProvider({ children }) {
  const [postListState, setPostList] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setNewTitle] = useState();
  const [content, setNewContent] = useState();

  return (
    <PostListContext.Provider
      value={ {
        postListState,
        setPostList,
        loading,
        setLoading,
        title,
        setNewTitle,
        content,
        setNewContent,
      } }
    >
      { children }
    </PostListContext.Provider>
  )
};

export default PostListProvider;