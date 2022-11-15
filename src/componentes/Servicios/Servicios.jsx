import React from 'react'
import "./Servicios.css"
import { FaSwimmingPool,FaFire,FaGlassMartiniAlt,FaCandyCane,FaVolumeUp,FaWifi } from 'react-icons/fa';

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="servicios_container">
        <h2 className="servicios_h2">Nuestros Servicios</h2>
        <div className="servicios_grid">
          <div className="servicios_item">
            <FaSwimmingPool className='servicios_icon'/>
            <h3 className="servicios_h3">Piscina con Reposeras</h3>
            <div className="servicios_p">Piscina de gran tamaño para que pueda disfrutar el verano y refrescarse de la mejor manera</div>
          </div>
          
          <div className="servicios_item">
                        <FaFire className='servicios_icon'/>
            <h3 className="servicios_h3">Parrilla, Asador y Horno</h3>
            <div className="servicios_p">Contamos con una variada seleccion de herramientas de cocina para que pueda deleitar a sus invitados con sus mejores recetas</div>
          </div>
          <div className="servicios_item">
                        <FaGlassMartiniAlt className='servicios_icon'/>
            <h3 className="servicios_h3">Barra con sillas en exterior</h3>
            <div className="servicios_p">Amoblamiento exterior para que pueda disfrutar el dia al aire libre</div>
          </div>
          <div className="servicios_item">
                        <FaCandyCane className='servicios_icon'/>
            <h3 className="servicios_h3">Mobiliarios para Candy Bar</h3>
            <div className="servicios_p">Alquiler de candy bar para sus eventos</div>
          </div>
          <div className="servicios_item">
                        <FaVolumeUp className='servicios_icon'/>
            <h3 className="servicios_h3">Equipo de Musica</h3>
            <div className="servicios_p">Equipo de musica con buen sonido, Bluetooth y luces</div>
          </div>
          <div className="servicios_item">
                        <FaWifi className='servicios_icon'/>
            <h3 className="servicios_h3">Zona Wi-Fi</h3>
            <div className="servicios_p">Contamos con zona Wi-Fi para que pueda compartir sus mejores momentos en la quinta</div>
          </div>
        </div>
      </div>
    </section>
  )
}
