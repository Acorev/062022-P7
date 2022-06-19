import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='topBar'>
      <img src={Logo} alt="" className="topBar__logo" />
      <nav className="topBar__nav">
        <Link to={'/'}>Acceil</Link>
        <Link to={'/'}>Connexion</Link>
        <Link to={'/'}>Déconnexion</Link>
        <Link to={'/'}>Compte</Link>
      </nav>
    </header>
  )
};

export default Header;