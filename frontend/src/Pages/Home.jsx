import React from 'react';
import PostsList from '../Components/PostsList';
import NewPostCard from '../Components/NewPostCard';
import './Home.css';

function Home() {
  return (
    <>
      <header>HomePage</header>
      <NewPostCard />
      <PostsList />
    </>
  )
}

export default Home;
