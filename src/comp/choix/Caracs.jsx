import '../../styles/Coteries.css'
import { useEffect, useState } from 'react'
import { getRandomInt } from '../../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import { lstCaracsExt } from '../../donnees/lstCaracs'

function Caracs({ phaseChoix, majPhaseChoix }) {
  const { perso, setPerso } = useContext(PersoContexte)
  const [lstCaracs, setLstCaracs] = useState(lstCaracsExt)
  const [indexCaracASelectionner, setIndexCaracASelectionner] = useState(0)
  const [valeursARepartir, setValeursARepartir] = useState([
    {
      valeur: -1,
      index: 0,
      choisi: false,
    },
    {
      valeur: -1,
      index: 1,
      choisi: false,
    },
    {
      valeur: -1,
      index: 2,
      choisi: false,
    },
    {
      valeur: -1,
      index: 3,
      choisi: false,
    },
    {
      valeur: -1,
      index: 4,
      choisi: false,
    },
    {
      valeur: -1,
      index: 5,
      choisi: false,
    },
  ])

  function majCaracLocal(index, valeur) {
    let caracs = [...lstCaracs]
    let carac = caracs[indexCaracASelectionner]
    carac.valeur = valeur
    carac.choisi = true

    let resDes = [...valeursARepartir]
    let resDe = resDes[index]
    resDe.choisi = true

    setValeursARepartir(resDes)
    setIndexCaracASelectionner(indexCaracASelectionner + 1)
    setLstCaracs(caracs)
  }

  const valeurVide = 'à sélectionner'

  useEffect(() => {
    function TirerDes() {
      var valTiree1 = getRandomInt(6) + getRandomInt(6) + 2
      var valTiree2 = getRandomInt(6) + getRandomInt(6) + 2
      var valTiree3 = getRandomInt(6) + getRandomInt(6) + 2

      setValeursARepartir([
        {
          valeur: valTiree1 + 6,
          index: 0,
        },
        {
          valeur: 19 - valTiree1,
          index: 1,
        },
        {
          valeur: valTiree2 + 6,
          index: 2,
        },
        {
          valeur: 19 - valTiree2,
          index: 3,
        },
        {
          valeur: valTiree3 + 6,
          index: 4,
        },
        {
          valeur: 19 - valTiree3,
          index: 5,
        },
      ])
    }

    TirerDes()
  }, [])

  function validerCaracs() {
    var changementsAuPerso = {
      dexterite: lstCaracs[0].valeur,
      constitution: lstCaracs[1].valeur,
      charisme: lstCaracs[2].valeur,
      intelligence: lstCaracs[3].valeur,
      sensibilite: lstCaracs[4].valeur,
      magie: lstCaracs[5].valeur,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)

    majPhaseChoix(phaseChoix + 1)
  }

  return (
    <div>
      <ul>
        {lstCaracs.map(({ titre, valeur, description }) => (
          <li key={titre}>
            <b>{titre}</b> ({description}) :{' '}
            {valeur !== -1 ? valeur : valeurVide}
          </li>
        ))}
      </ul>
      {indexCaracASelectionner === 6 ? (
        <button className="bouton" onClick={() => validerCaracs()}>
          Valider
        </button>
      ) : (
        <div>
          Sélection de la carac : {lstCaracs[indexCaracASelectionner].titre}
          <br />
          Cliquez sur la valeur que vous voulez lui affecter :
          <ul>
            {valeursARepartir.map(({ index, valeur, choisi }) => (
              <li key={index}>
                {choisi ? (
                  ''
                ) : (
                  <button
                    className="bouton"
                    onClick={() => {
                      majCaracLocal(index, valeur)
                    }}
                  >
                    {valeur}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Caracs
