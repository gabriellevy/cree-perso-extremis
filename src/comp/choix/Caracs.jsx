import '../../styles/Coteries.css'
import { useEffect } from 'react'
import { getRandomInt } from '../../utils/rand'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'

function Caracs({ phaseChoix, majPhaseChoix }) {
  const { perso, setPerso } = useContext(PersoContexte)

  var dexterite = -1
  var constitution = -1
  var charisme = -1
  var intelligence = -1
  var sensibilite = -1
  var magie = -1

  var valTiree1 = -1
  var valTiree2 = -1
  var valTiree3 = -1
  function TirerDes() {
    valTiree1 = getRandomInt(6) + getRandomInt(6) + 2
    valTiree2 = getRandomInt(6) + getRandomInt(6) + 2
    valTiree3 = getRandomInt(6) + getRandomInt(6) + 2

    dexterite = valTiree1 + 6
    constitution = 19 - valTiree1
    charisme = valTiree2 + 6
    intelligence = 19 - valTiree2
    sensibilite = valTiree3 + 6
    magie = 19 - valTiree3
  }

  TirerDes()

  function validerCaracs() {
    var changementsAuPerso = {
      dexterite: dexterite,
      constitution: constitution,
      charisme: charisme,
      intelligence: intelligence,
      sensibilite: sensibilite,
      magie: magie,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)

    majPhaseChoix(phaseChoix + 1)
  }

  return (
    <div>
      <ul>
        <li>Dextérité : {dexterite}</li>
        <li>Constitution (inclut la force) : {constitution}</li>
        <li>Charisme : {charisme}</li>
        <li>Intelligence : {intelligence}</li>
        <li>
          Sensibilité (perception au niveau sens, magie, sociabilité) :{' '}
          {sensibilite}
        </li>
        <li>Magie : {magie}</li>
      </ul>
      <button className="bouton" onClick={() => validerCaracs()}>
        Sélectionner
      </button>
    </div>
  )
}

export default Caracs
