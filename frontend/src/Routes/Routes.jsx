import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';

class PageRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    )
  }
}

export default PageRoutes;