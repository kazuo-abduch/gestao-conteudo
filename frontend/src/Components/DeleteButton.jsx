import React from 'react';
import './DeleteButton.css';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../api/api';

function DeleteButton(props) {
  const { id, isHomePage } = props;
  const navigate = useNavigate();
  
  const requestDeletePost = async () => {
    await deletePost(id);
    if (!isHomePage) {
      navigate(-1);
    } else {
      window.location.reload(true);
    }
  }  
  
  return (
    <button className='delete-button' onClick={ requestDeletePost }>Delete Post</button>
  )
}

export default DeleteButton;
