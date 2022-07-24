import { Logotype } from '../Logotype'
import { NavBar } from '../NavBar';
import { NetworksBar } from '../NetworksBar';
import { RequestButton } from '../RequestButton';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-logo-networks'>
        <Logotype color="#ffffff" />
        <NetworksBar/>
      </section>
      <NavBar column={true} />
      <section className='footer-btn-copy'>
        <RequestButton />
        <p className='copyrigth'> © Easybank. All Rights Reserved</p>
      </section>
    </footer>
  )
}
