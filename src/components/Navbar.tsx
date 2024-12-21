import { FC } from 'react'
import '../App.css'
import { FaBook, FaHandsHelping, FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router'

const Navbar: FC = () => {
  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to={'/'} className="navbar-logo">
          Scholar <span className='emphasized'>AI</span>
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to={'/scholarships'}><FaBook className='nav-icon'/><span>Scholarships</span></NavLink></li>
        <li><NavLink to={'/services'}><FaHandsHelping className='nav-icon'/>Services</NavLink></li>
        <li><NavLink to={'/profile'}><FaUser className='nav-icon'/>Profile</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar