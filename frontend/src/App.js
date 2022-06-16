import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PostList from './pages/post-list'
import Logo from './img/icon-left-font-monochrome-white.svg'
import './css/app.css'

export default function App() {
  return (
    <div>
      <header className='topbar'>
        <img className='topbar-logo' src={Logo} alt='logo' />
        <nav className='topbar-nav'>
          <Link to={'/'}>Accueil</Link>
          <Link to={'/'}>Connexion</Link>
          <Link to={'/'}>Déconnection</Link>
          <Link to={'/'}>Créer un compte</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<PostList />} />
      </Routes>
    </div>
  )
}