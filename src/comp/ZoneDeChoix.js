import Coteries from './choix/Coteries'
import Finalisation from './choix/Finalisation'

function ZoneDeChoix({ phaseChoix, majPhaseChoix }) {
  return (
    <div>
      {phaseChoix === 1 ? (
        <Coteries phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      ) : (
        <Finalisation />
      )}
    </div>
  )
}

export default ZoneDeChoix
