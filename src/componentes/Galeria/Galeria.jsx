import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import "./Galeria.css"
import ImageGallery from 'react-image-gallery';

export default function Galeria() {
  const images = [
    {
      original:"https://i.ibb.co/687zZsN/hero2.jpg",
      thumbnail: "https://i.ibb.co/687zZsN/hero2.jpg" 
    },
    {
      original:"https://i.ibb.co/v4CLSwY/hero3.jpg",
      thumbnail: "https://i.ibb.co/v4CLSwY/hero3.jpg" 
    },
    {
      original:"https://i.ibb.co/mDtQLcy/hero.jpg",
      thumbnail: "https://i.ibb.co/mDtQLcy/hero.jpg" 
    },
    {
      original:"https://i.ibb.co/R49R7Qn/Whats-App-Image-2022-01-06-at-20-23-45.jpg",
      thumbnail: "https://i.ibb.co/R49R7Qn/Whats-App-Image-2022-01-06-at-20-23-45.jpg" 
    }
  ]

  return (
    <section className="galeria" id='galeria'>
      <div className="galeria_container">
      <h2 className="galeria_h2">Galeria</h2>
      <div className="galeria-frame">

        <ImageGallery items={images} className="galeria-frame"/>
      </div>
      </div>
    </section>
  )
}
