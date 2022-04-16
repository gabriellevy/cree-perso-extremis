import Coteries from './choix/Coteries'
import Caracs from './choix/Caracs'
import Finalisation from './choix/Finalisation'

function ZoneDeChoix({ phaseChoix, majPhaseChoix }) {
  if (phaseChoix === 1) {
    return (
      <div>
        <Coteries phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  if (phaseChoix === 2) {
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
