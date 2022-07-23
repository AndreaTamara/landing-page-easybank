import './Header.css';
import { NavBar } from '../NavBar';
import { RequestButton } from '../RequestButton';
import iconHamburger from '../../assets/icons/icon-hamburger.svg';
import iconClose from '../../assets/icons/icon-close.svg';
import { useState } from 'react';

import { Modal } from '../Modal';
import { Logotype } from '../Logotype';

export const Header = () => {
 
  const [openModal, setOpenModal] = useState(false)

  return (
    <header className="header">
      <Logotype color="#2D314D"/>
      <div className='header-desktop-container'>
        <NavBar />
        <RequestButton />
      </div>
      {openModal ?
        <button className='menu-icon' onClick={() => setOpenModal(false)}>
          <img src={iconClose} alt='menu icon' />
        </button>
        :
        <button className='menu-icon' onClick={() => setOpenModal(true)}>
          <img src={iconHamburger} alt='menu icon' />
        </button>
      }
      {openModal &&
        <Modal>
          <NavBar column={true} />
        </Modal>
      }
    </header>


  )
}