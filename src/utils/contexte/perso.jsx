import React, { useState, createContext, useEffect } from 'react'

import { getCompObjPropertyName, lstComps } from '../../donnees/lstComps'
import { resMaxDe, typesDes } from '../rand'

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
    niveau_richesse: 0,
    pointsDeVie: 0,
    utilisationsCapaMagique: 0,
    initiative: 0,
    defense: 0,
    deDeVie: 0, // stocké par index du tableau 'typesDes' => quand une coterie ou autre qu'on choisit a une valeur supérieure, alors on prend cette valeur supérieure
  })

  useEffect(() => {
    // valeurs de base de compétences :
    lstComps.forEach(({ titre, description }) => {
      const idComp = getCompObjPropertyName(titre)
      perso[idComp] = 0
    })
  }, [])

  useEffect(() => {
    var changementsAuPerso = {}
    changementsAuPerso['pointsDeVie'] = resMaxDe(typesDes[perso.deDeVie])

    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }, [perso.deDeVie])

  // c'est ici que je pourrais changer le bg ??

  return (
    <PersoContexte.Provider value={{ perso, setPerso }}>
      {children}
    </PersoContexte.Provider>
  )
}
