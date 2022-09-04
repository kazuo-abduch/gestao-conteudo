import React, { useContext, useEffect } from 'react';
import PostListContext from '../context/postListContext';
import PostCard from './PostCard';
import { getAllPosts } from '../api/api';

function RenderPostList() {
  
  const { postListState, loading, setPostList, setLoading } = useContext(PostListContext)

  useEffect(() => {
    function requestPosts() {
      getAllPosts().then((response) => {
        response.reverse(); //inverte a ordem para aparecer o post mais recente primeiro
        setPostList(response);
        setLoading(false);
      })
    };
    requestPosts();
  }, [setLoading, setPostList])
  

  const renderPostList = () => {
    return (
      postListState.map((post, index) => {
        return (
          <PostCard
            key={ index }
            index={ post.id }
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