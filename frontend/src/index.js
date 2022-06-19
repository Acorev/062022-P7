import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import './styles/index.scss'

import Home from './Pages/Home';
import Empty from './Pages/Empty';
import PostAdd from './Pages/PostAdd';
import PostEdit from './Pages/PostEdit';
import PageNotFound from './Pages/PageNotFound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empty' element={<Empty />} />
        <Route path='/add' element={<PostAdd />} />
        <Route path='/edit/:id' element={<PostEdit />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);