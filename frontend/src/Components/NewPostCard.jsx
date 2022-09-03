import React, { useContext } from 'react';
import PostListContext from '../context/postListContext';
import { createNewPost } from '../api/api';

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
    <form>
      <input placeholder='New Title' onChange={ saveTitleOnState }/>
      <input placeholder='Description' onChange={ saveContentOnState } />
      <button type="submit" onClick={ onSubmit }>Confirm</button>
    </form>
  )
}

export default NewPostCard;