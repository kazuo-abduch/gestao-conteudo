import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPostById, findUpdates, updatePost, deletePost } from '../api/api';

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postTitle, setTitle] = useState();
  const [postContent, setContent] = useState();
  const [updateList, setUpdateList] = useState()
  const [isLoading, setPostLoading] = useState(true);

  useEffect(() => {
    function requestUpdateList(id) {
      findUpdates(id).then((response) => {
        response.pop(); //remove ultimo elemento da lista. Este representa o post atual, e aparecerá no input
        response.reverse(); //inverte a ordem dos updates para aparecer primeiro o update mais recente
        setUpdateList(response);
        setPostLoading(false);
      })
    }
    function requestPostById(id) {
      getPostById(id).then((response) => {
        setTitle(response.title);
        setContent(response.content);
        requestUpdateList(id);
      })
    }
    requestPostById(id)
  }, [id])

  const updateTitle = ({ target }) => {
    setTitle(target.value);
  }

  const updateContent = ({ target }) => {
    setContent(target.value);
  }

  const renderUpdates = () => {
    return updateList.map((update, index) => {
      return (
        <div key={index}>
          <div>{update.oldTitle}</div>
          <div>{update.oldContent}</div>
        </div>
      )
    })
  }
  
  const requestUpdatePost = async () => {
    const updatedPost = {
      title: postTitle,
      content: postContent,
    }
    console.log(updatedPost);
    await updatePost(id, updatedPost);
  }
  
  const renderPost = () => {
    return (
      <form>
        <input value={ postTitle } onChange={ updateTitle } />
        <input value={ postContent } onChange={ updateContent } />
        <button type="submit" onClick={ requestUpdatePost }>
          Update
        </button>
        { renderUpdates() }
      </form>
    )
  }

  const requestDeletePost = async () => {
    await deletePost(id);
    navigate(-1);
  }

  return (
    <>
      <Link to="/">Voltar</Link>
      <div>UpdatePage</div>
      { isLoading ? 'Loading' : renderPost() }
      <button onClick={ requestDeletePost }>Delete Post</button>
    </>
  )
}

export default Update;
