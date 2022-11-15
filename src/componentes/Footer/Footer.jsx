import React from 'react'
import "./Footer.css"
import { FaInstagram,FaFacebookF,FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="social">

        <a 
          href="https://www.facebook.com/lasabina.quinta"
          target="_blank" 
          rel="noopener noreferrer" >
          <FaFacebookF className='social_icon social_fb'/>
        </a>
        <a 
          href="https://wa.me/541122513974?text=Hola%20Quinta%20 La%20Sabina!,%20me%20interesa%20obtener%20mas%20información%20sobre%20sus%20servicios." 
          target="_blank" 
          rel="noopener noreferrer">
          <FaWhatsapp className='social_icon social_wp'/>
        </a> 

        <a 
          href="https://www.instagram.com/quinta_lasabina/"
          target="_blank" 
          rel="noopener noreferrer">
          <FaInstagram className='social_icon social_ig'/>
        </a>
        <p className='rights'>© 2022 Quinta La Sabina. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
