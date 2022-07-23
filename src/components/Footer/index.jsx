import { Logotype } from '../Logotype'
import {NavBar} from '../NavBar';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-logo-networks'>
      <Logotype color="#ffffff"/>
      </section>
      <NavBar column={true}/>
      <section className='footer-logo-networks'></section>
    </footer>
  )
}
