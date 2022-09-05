import React, { useContext, useEffect } from 'react';
import PostListContext from '../context/postListContext';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import DeleteButton from './DeleteButton';
import './PostList.css';
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
          <div className='cardPost' key={ index }>
            <div>
              <Link to={ `/update/${ post.id }` } >
                <PostCard
                  title={ post.title }
                  content={ post.content }
                />
              </Link>
            </div>
            <div>
              <DeleteButton
                id={ post.id }
                isHomePage={ true }
              />
            </div>
          </div>
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