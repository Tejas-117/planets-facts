import React, { useEffect, useContext } from 'react';
import { PlanetContext } from '../../utils/ContextProvider';
import {  toggleNav } from './mobileNavbar';
import hamburger from "../../images/icon-hamburger.svg";
import './Header.css'

function Header() {
   const [planet, setPlanet] = useContext(PlanetContext);

   let links;
   function updatePlanet(event){
      // update planet
      const element = event.target
      const planetName = element.dataset.planet;
      setPlanet(planetName);

      // to maintain the current planet in header;      
      links.forEach(link => {
         link.classList.remove('active__header')
      })
      element.classList.add('active__header');
   }

   useEffect(() => {      
      links = [...document.querySelectorAll('.nav__ul li')];
      
      links.forEach(link => {
         link.addEventListener('click', updatePlanet);
      })
   }, [])
   
   return (
      <div className="header">
         <h2 className="header__logo">THE PLANETS</h2>

         <div onClick={toggleNav} className="hamburger__icon"><img  src={hamburger} alt="Navigation bar" /></div>

        <div className="nav__list">
           <ul className="nav__ul">
              <li className="link mercury active__header" data-planet='mercury'>MERCURY</li>
              <li className="link venus" data-planet='venus'>VENUS</li>
              <li className="link earth" data-planet='earth'>EARTH</li>
              <li className="link mars" data-planet='mars'>MARS</li>
              <li className="link jupiter" data-planet='jupiter'>JUPITER</li>
              <li className="link saturn" data-planet='saturn'>SATURN</li>
              <li className="link uranus" data-planet='uranus'>URANUS</li>
              <li className="link neptune" data-planet='neptune'>NEPTUNE</li>
           </ul>
        </div>
      </div>
   )
}

export default Header
