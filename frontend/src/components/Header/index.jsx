import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './style.scss'
import Logo from '../../assets/logo.svg'
import AuthContext from '../../context/AuthContext';

const Header = () => {
    const { authToken, logoutUser } = useContext(AuthContext);

    return (
        <header className='topbar'>
            <Link to='/' className='topbar__logo'>
                <img src={Logo} alt='logo' />
            </Link>
            <nav className='topbar__nav'>
                {!authToken && (
                    <>
                        <Link to='/login'>Connection</Link>
                        <Link to='/signup'>S'enregistrer</Link>
                    </>
                )}
                {authToken && (
                    <button onClick={logoutUser}>Déconnection</button>
                )}
            </nav>
        </header>
    )
}

export default Header