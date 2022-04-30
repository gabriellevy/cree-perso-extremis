import Coteries from './choix/Coteries'
import Caracs from './choix/ChoixCaracs'
import Voies from './choix/Voies'
import Finalisation from './choix/Finalisation'
import AffichageFinal from './choix/AffichageFinal'

function ZoneDeChoix({ phaseChoix, majPhaseChoix }) {
  const iDCoteries = 'Coteries'
  const iDVoies = 'Voies'
  const iDCaracs = 'Caracs'
  const iDFinalisation = 'Finalisation'
  const iDAffichageFinal = 'AffichageFinal'
  const ordre = [
    iDCoteries,
    iDFinalisation,
    iDVoies,
    iDCaracs,
    iDAffichageFinal,
  ]
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
  if (ordre[phaseChoix - 1] === iDAffichageFinal) {
    return (
      <div>
        <AffichageFinal />
      </div>
    )
  }
}

export default ZoneDeChoix
