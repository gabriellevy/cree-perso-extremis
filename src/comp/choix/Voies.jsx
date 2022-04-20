import '../../styles/Coteries.css'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'
import '../../styles/Caracs.css'

export default function Voies({ phaseChoix, majPhaseChoix }) {
  const { perso, setPerso } = useContext(PersoContexte)

  function validerVoies() {
    var changementsAuPerso = {}
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)

    majPhaseChoix(phaseChoix + 1)
  }

  return (
    <div className="texteStandard">
      <button className="bouton" onClick={() => validerVoies()}>
        Valider
      </button>
      affiche les caracs
    </div>
  )
}
