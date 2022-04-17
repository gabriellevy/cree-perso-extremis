import React, { useState, createContext, useEffect } from 'react'

import { getCompObjPropertyName, lstComps } from '../../donnees/lstComps'

export const PersoContexte = createContext()

export const PersoProvider = ({ children }) => {
  const [perso, setPerso] = useState({
    // valeurs de base des caracs
    dexterite: 0,
    constitution: 0,
    charisme: 0,
    intelligence: 0,
    sensibilite: 0,
    magie: 0,
  })

  useEffect(() => {
    // valeurs de base de compétences :
    lstComps.forEach(({ titre, description }) => {
      const idComp = getCompObjPropertyName(titre)
      perso[idComp] = 0
    })
  }, [])

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
