import React, { useState, createContext } from 'react'

export const PersoContexte = createContext()

export const PersoProvider = ({ children }) => {
  const [perso, setPerso] = useState({
    dexterite: 0,
    constitution: 0,
    charisme: 0,
    intelligence: 0,
    sensibilite: 0,
    magie: 0,
  })

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
