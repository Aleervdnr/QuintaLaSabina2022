import React from 'react'
import "./Contacto.css"
import { AiFillCar } from 'react-icons/ai';
import { FaBus } from 'react-icons/fa';
import Iframe from 'react-iframe'


export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto_container">
        <h2 className="contacto_h2">Contacto</h2>

        <div className="contacto_grid">
          <div className="contacto_text">
            <h3 className="contacto_h3">Direccion</h3>
            <p>Gdor. Arias 3309</p>
            <p>Glew,Bs.As</p>
          </div>
          <div className="contacto_text">
            <h3 className="contacto_h3">Horarios</h3>
            <p>Lunes a domingos: 10:00 - 19:00</p>
          </div>
          <div className="contacto_text">
            <h3 className="contacto_h3">Info Contacto</h3>
            <p>Telefono: 
              <a 
                href="https://wa.me/541122513974?text=Hola%20Quinta%20 La%20Sabina!,%20me%20interesa%20obtener%20mas%20información%20sobre%20sus%20servicios." 
                target="_blank" 
                rel="noopener noreferrer" 
                className='contacto_tel'> 11-2251-3974</a> 
            </p>
          </div>
        </div>

        <div className="contacto_boxs">
          <div className="contacto_box">
            <AiFillCar className='contacto_icon'/>
            <p>A 5 minutos de la estacion de Glew.</p>
          </div>
          <div className="contacto_box">
            <FaBus className='contacto_icon'/>
            <p>Linea de colectivo 506 a una cuadra y media.</p>
          </div>
        </div>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13091.16135288595!2d-58.3706539!3d-34.8866108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcd3e90ec5850721!2sQuinta%20%22La%20Sabina%22!5e0!3m2!1ses-419!2sar!4v1668468463149!5m2!1ses-419!2sar"
        width="100%"
        height="320px"
        id=""
        className="iframe"
        display="block"
        position="relative"
        />
      </div>
    </section>
  )
}
