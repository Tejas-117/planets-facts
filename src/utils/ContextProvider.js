import React, { createContext, useState } from 'react'

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {
   const [planet, setPlanet] = useState('mercury');

   return <PlanetContext.Provider value={[planet, setPlanet]}>
      {props.children}
   </PlanetContext.Provider>
}