import { FC, useState } from 'react';
import { FaBook, FaHandsHelping, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router';
import '../App.css';
import logoImg from '../assets/logo.svg';


const Navbar: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleHumburger = () => {
    setIsOpenMenu(prevIsOpenMenu => !prevIsOpenMenu);
  }

  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to={'/'}>
          <img src={logoImg} alt="scholar logo" width="130px"/>
        </NavLink>
      </div>

      <ul className={`navbar-links ${isOpenMenu && "dropdown"}`}>
        <li><NavLink to={'/scholarships'}><FaBook className='icon'/><span>Scholarships</span></NavLink></li>
        <li><NavLink to={'/services'}><FaHandsHelping className='icon'/>Services</NavLink></li>
        <li><NavLink to={'/profile'}><FaUser className='icon'/>Profile</NavLink></li>
      </ul>

      <div className={`humburger ${isOpenMenu && "open-menu"}`} onClick={toggleHumburger}>
        <div className='line line1'></div>
        <div className='line line2'></div>
        <div className='line line3'></div>
      </div>
    </nav>
  )
}

export default Navbar