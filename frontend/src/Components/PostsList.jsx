import React, { useEffect, useState } from 'react';
import getAllPosts from '../api/api';

function RenderPostList() {
  const [postListState, setPostList] = useState();
  
  useEffect(() => {
    function requestPosts() {
      getAllPosts().then((response) => {
        const postList = response.results;
        setPostList(postList)
      })
    };
    requestPosts();
  })

  console.log(postListState);
  return (
    <div>
      Teste
    </div>
  )
}

export default RenderPostList;