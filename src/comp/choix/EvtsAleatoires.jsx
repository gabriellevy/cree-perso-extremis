import { getEvtAleatoire } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useContext, useEffect, useState } from 'react'
import { PhaseChoixContexte } from '../../utils/contexte/phaseChoix'
import { PersoContexte } from '../../utils/contexte/perso'
import { interpreterNouvLigne } from './coteries/ZoneDeValidation'
import { getCompObjPropertyName } from '../../donnees/lstComps'

function EvtsAleatoires() {
  const { perso, setPerso } = useContext(PersoContexte)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)
  const [texteFinal, setTexteFinal] = useState('aucun événement')
  const [rerender, setRerender] = useState(false)
  const [changementsAuPerso, setChangementsAuPerso] = useState({})

  useEffect(() => {
    // détermination de tous les événements aléatoires
    var texte = ''
    const evtsAleatoireCoterie = getEvtAleatoire(perso.coterie, 1)
    var changementsAuPersoLocal = {}

    // événement aléatoire de coterie (+ un deuxième ?)
    evtsAleatoireCoterie.forEach((evt) => {
      texte =
        texte + '\n' + evt.description + ' (+1 ' + evt.bonusCompetence + ')'
      const idComp = getCompObjPropertyName(evt.bonusCompetence)
      changementsAuPersoLocal[idComp] = perso[idComp] + 1
    })

    setTexteFinal(interpreterNouvLigne(texte))
    setRerender(!rerender)
    setChangementsAuPerso(changementsAuPersoLocal)
  }, [])

  function validerEvts() {
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majPhaseChoix(phaseChoix + 1)
  }

  return (
    <div style={{ padding: '0px 15px 0px 15px' }}>
      <div className="texteStandard">{texteFinal}</div>
      <button className="bouton" onClick={() => validerEvts()}>
        Confirmer
      </button>
    </div>
  )
}

export default EvtsAleatoires
