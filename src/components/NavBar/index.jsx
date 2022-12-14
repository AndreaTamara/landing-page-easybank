import './NavBar.css';
import { Link } from 'react-router-dom'

export const NavBar = ({column}) => {
  return (
    <nav className='nav-bar-container'>
      <ul className={`nav-bar ${column? 'nav-bar-column-list':''}`}>
        <Link to='/'>
          <li className='nav-bar-option'>
            Home
          </li>
        </Link>
        <Link to='about'>
          <li className='nav-bar-option'>
            About
          </li>
        </Link>
        <Link to='contact'>
          <li className='nav-bar-option'>
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  )
}
