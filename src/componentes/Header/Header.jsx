import React,{useEffect,useState} from 'react'
import {FiMenu, FiX } from 'react-icons/fi';
import "./Header.css"




export default function Header() {

  const [y, setY] = useState(window.scrollY)
  const [burgerClickState, setBurgerClickState] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY))
  },[])

  const burgerClick = () => {
    setBurgerClickState(!burgerClickState)
  }
  return (
    <header className={y > 0 ? "header header-scroll" : "header"}>
      <nav className="nav">
        <h1 className="nav_title">Quinta la sabina</h1>
        <ul 
          className={burgerClickState ? "nav_ul nav_ul--active" : "nav_ul"}
          style={
            window.screen.width < "1023" ? 
            y > 0 ? {top:"70px", height:"calc(100vh - 70px)"} 
            :
            {top:"75px"} : {top:"0px", height:"100%"}}>
          <li className="nav_item">
            <a href='#about' className='nav_link'>Sobre Nosotros</a>
          </li>
          <li className="nav_item">
            <a href='#servicios' className='nav_link'>Servicios</a>
          </li>
          <li className="nav_item">
            <a href='#info' className='nav_link'>Mas Info</a>
          </li>
          <li className="nav_item">
            <a href='#reseñas' className='nav_link'>Reseñas</a>
          </li>
          <li className="nav_item">
            <a href='#galeria' className='nav_link'>Galeria</a>
          </li>
          <li className="nav_item">
            <a href='#contacto' className='nav_link'>Contacto</a>
          </li>
        </ul>

        {burgerClickState ? <FiX className="burger" onClick={burgerClick}/> : <FiMenu className="burger" onClick={burgerClick}/> }
      </nav>
    </header>
  )
}
