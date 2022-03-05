import Coteries from './choix/Coteries'
import Finalisation from './choix/Finalisation'

function ZoneDeChoix({ perso, majPerso, phaseChoix, majPhaseChoix }) {
  return (
    <div>
      {phaseChoix === 1 ? (
        <Coteries
          perso={perso}
          majPerso={majPerso}
          phaseChoix={phaseChoix}
          majPhaseChoix={majPhaseChoix}
        />
      ) : (
        <Finalisation perso={perso} majPerso={majPerso} />
      )}
    </div>
  )
}

export default ZoneDeChoix
