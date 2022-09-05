import React from 'react';
import PageRoutes from './Routes/Routes';
import PostListProvider from './context/postListProvider';
import './App.css';


function App() {
  return (
    <PostListProvider>
      <PageRoutes />
    </PostListProvider>
  );
}

export default App;
