import Coteries from './choix/Coteries'
import Caracs from './choix/ChoixCaracs'
import Voies from './choix/Voies'
import Finalisation from './choix/Finalisation'

function ZoneDeChoix({ phaseChoix, majPhaseChoix }) {
  if (phaseChoix === 2) {
    return (
      <div>
        <Coteries phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  if (phaseChoix === 3) {
    return (
      <div>
        <Voies phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  if (phaseChoix === 1) {
    return (
      <div>
        <Caracs phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  return (
    <div>
      <Finalisation />
    </div>
  )
}

export default ZoneDeChoix
