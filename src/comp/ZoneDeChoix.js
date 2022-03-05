import Coteries from './choix/Coteries'
import Finalisation from './choix/Finalisation'

function ZoneDeChoix({
  descriptionCourante,
  majDescriptionCourante,
  phaseChoix,
  majPhaseChoix,
}) {
  return (
    <div>
      {phaseChoix === 1 ? (
        <Coteries
          descriptionCourante={descriptionCourante}
          majDescriptionCourante={majDescriptionCourante}
        />
      ) : (
        <Finalisation majDescriptionCourante={majDescriptionCourante} />
      )}
    </div>
  )
}

export default ZoneDeChoix
