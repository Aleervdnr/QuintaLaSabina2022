import React from 'react'
import "./Reseñas.css"
import { ElfsightWidget } from 'react-elfsight-widget';

export default function Reseñas() {
  return (
    <section className="reseñas" id="reseñas">
      <div className="reseñas_container">
          <h2 className='reseñas_h2'>Reseñas</h2>

          <div className="widget-container">
            <ElfsightWidget widgetID="7c333469-f853-42d6-a403-efb900443ceb"/>
          </div>
      </div>
    </section>
  )
}
