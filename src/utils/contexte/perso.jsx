import React, { useState, createContext } from 'react'

export const PersoContexte = createContext()

export const PersoProvider = ({ children }) => {
  const [perso, setPerso] = useState({})

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
