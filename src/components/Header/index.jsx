import './Header.css';
import logo from '../../assets/images/logo.svg'
import { NavBAr } from '../NavBar';
import { RequestButton } from '../RequestButton';
import iconHamburger from '../../assets/icons/icon-hamburger.svg';
import iconClose from '../../assets/icons/icon-close.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <header className="header">
      <img className='logo' src={logo} alt='easybank logo' onClick={useNavigate('/')}/>
      <div className='header-desktop-container'>
        <NavBAr />
        <RequestButton />
      </div>
      {openModal ?
        <button className='menu-close' onClick={()=>setOpenModal(false)}>
          <img src={iconClose} alt='menu icon' />
        </button>
        :
        <button className='menu-open' onClick={()=>setOpenModal(true)}>
          <img src={iconHamburger} alt='menu icon' />
        </button>
      }
    </header>
  )
}