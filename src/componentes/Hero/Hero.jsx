import React from 'react'
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero' id='hero'>
      <div className="hero_text-box">
        <h1 className='hero_title'>Quinta la sabina</h1>
        <p  className='hero_p'>Tu oportunidad de hacer fiestas de ensueño.</p>
        <a href="#about" className='hero_btn'>Ver Mas</a>
      </div>
    </div>
  )
}
