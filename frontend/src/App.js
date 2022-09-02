import React from 'react';
import PageRoutes from './Routes/Routes';
import PostListProvider from './context/postListProvider';


function App() {
  return (
    <PostListProvider>
      <PageRoutes />
    </PostListProvider>
  );
}

export default App;
