import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import { useContext, useEffect, useState } from 'react'
import { PhaseChoixContexte } from '../../utils/contexte/phaseChoix'
import { PersoContexte } from '../../utils/contexte/perso'

function EvtsAleatoires() {
  const [rerender, setRerender] = useState(false)
  const { perso, setPerso } = useContext(PersoContexte)
  const { phaseChoix, majPhaseChoix } = useContext(PhaseChoixContexte)
  var texteFinal = 'aucun événement'

  useEffect(() => {
    // détermination de tous les événements aléatoires
    texteFinal = 'pas encore fait'
    setRerender(!rerender)
  }, [])

  return (
    <div style={{ padding: '0px 15px 0px 15px' }}>
      <div className="texteStandard">youpla : {texteFinal}</div>
    </div>
  )
}

export default EvtsAleatoires
