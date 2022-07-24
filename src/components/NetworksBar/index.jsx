import './NetworksBar.css'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import youtubeIcon from '../../assets/icons/icon-youtube.svg'
import twitterIcon from '../../assets/icons/icon-twitter.svg'
import pinterestIcon from '../../assets/icons/icon-pinterest.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'


export const NetworksBar = () => {

    const socialNetworks = [
        facebookIcon,
        youtubeIcon,
        twitterIcon,
        pinterestIcon,
        instagramIcon
    ]
    
  return (
    <div className='networks-bar'>
        {socialNetworks.map((el,i)=>{
            return(
                <button key= {i} className='network-icon'>
                    <img src={el} alt='network-icon'/>
                </button>
            )
        })}
    </div>
  )
}
