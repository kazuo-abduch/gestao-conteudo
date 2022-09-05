import React, { useContext } from 'react';
import PostListContext from '../context/postListContext';
import { createNewPost } from '../api/api';
import './NewPost.css';

function NewPostCard() {

  const { title, setNewTitle, content, setNewContent } = useContext(PostListContext);

  const saveTitleOnState = async ({ target }) => {
    setNewTitle(target.value);
  }

  const saveContentOnState = async ({ target }) => {
    setNewContent(target.value);
  }

  const onSubmit = () => {
    createNewPost(title, content);
  }

  return (
    <form className='form-conteiner'>
      <input className='title-input' placeholder='Title' onChange={ saveTitleOnState }/>
      <textarea className='content-input' placeholder='Description' onChange={ saveContentOnState } />
      <button className='submit-button' type="submit" onClick={ onSubmit }>Confirm</button>
    </form>
  )
}

export default NewPostCard;