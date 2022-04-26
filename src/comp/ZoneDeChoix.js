import Coteries from './choix/Coteries'
import Caracs from './choix/ChoixCaracs'
import Voies from './choix/Voies'
import Finalisation from './choix/Finalisation'

function ZoneDeChoix({ phaseChoix, majPhaseChoix }) {
  const iDCoteries = 'Coteries'
  const iDVoies = 'Voies'
  const iDCaracs = 'Caracs'
  const iDFinalisation = 'Finalisation'
  const ordre = [iDCoteries, iDVoies, iDCaracs, iDFinalisation]
  if (ordre[phaseChoix - 1] === iDCoteries) {
    return (
      <div>
        <Coteries phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDVoies) {
    return (
      <div>
        <Voies phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDCaracs) {
    return (
      <div>
        <Caracs phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    )
  }
  if (ordre[phaseChoix - 1] === iDFinalisation) {
    return (
      <div>
        <Finalisation />
      </div>
    )
  }
}

export default ZoneDeChoix
