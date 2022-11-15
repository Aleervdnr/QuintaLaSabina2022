import React from 'react'
import "./About.css"

export default function About() {
  return (
    <section className="about" id='about'>
      <div className="about_container">
        <img src="https://i.ibb.co/687zZsN/hero2.jpg" alt="Quinta con pileta" className="about_img" />
        <div className="about_text">
          <h2 className='about_h2'>Sobre Nosotros</h2>
          <p className='about_p'>Buscamos brindarte un dia distinto al resto con nuestro predio, ofreciendo una variedad de actividades para que pases tu dia al 100. Donde podes disfrutar de nuestra piscina, nuestras parrillas u hornos, juegos de mesa y mucho mas!</p>
          <h3 className='about_h3'>Porque elegirnos</h3>
          <p className='about_p'>Contamos con un gran espacio para que puedas disfrutar el dia con tu familia o amigos de la mejor manera. El verano se acerca y el mejor lugar para pasarlo es <b>Quinta La Sabina</b></p>
        </div>
      </div>
    </section>
  )
}
