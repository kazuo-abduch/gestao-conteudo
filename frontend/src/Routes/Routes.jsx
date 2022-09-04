import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Update from '../Pages/Update';

class PageRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/update/:id" element={ <Update /> } />
      </Routes>
    )
  }
}

export default PageRoutes;