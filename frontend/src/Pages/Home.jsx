import React from 'react';
import PostsList from '../Components/PostsList';
import NewPostCard from '../Components/NewPostCard';

function Home() {
  return (
    <>
      <div>HomePage</div>
      <NewPostCard />
      <PostsList />
    </>
  )
}

export default Home;
