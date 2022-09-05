import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostCard from '../Components/PostCard';
import DeleteButton from '../Components/DeleteButton';
import './Update.css';
import { getPostById, findUpdates, updatePost } from '../api/api';

function Update() {
  const { id } = useParams();
  const [postTitle, setTitle] = useState();
  const [postContent, setContent] = useState();
  const [updateList, setUpdateList] = useState()
  const [isLoading, setPostLoading] = useState(true);

  useEffect(() => {
    function requestUpdateList(id) {
      findUpdates(id).then((response) => {
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
        <div className='cardPost'>
          <PostCard
              key={ index }
              index={ update.id }
              title={ update.oldTitle }
              content={ update.oldContent }
            />
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
      <div>
        <form className='conteiner'>
          <input className='title-input' value={ postTitle } onChange={ updateTitle } />
          <textarea className='content-input' value={ postContent } onChange={ updateContent } />
          <button type="submit" onClick={ requestUpdatePost }>
            Update
          </button>
          <DeleteButton
            id={ id }
            isHomePage={ false }
          />
        </form>
        <div>Update History</div>
        { renderUpdates() }
      </div>
    )
  }

  return (
    <>
      <Link to="/">Voltar</Link>
      <div>UpdatePage</div>
      { isLoading ? 'Loading' : renderPost() }
    </>
  )
}

export default Update;
