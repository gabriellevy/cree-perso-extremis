import Coteries from './choix/Coteries'

function ZoneDeChoix({
  descriptionCourante,
  majDescriptionCourante,
  phaseChoix,
  majPhaseChoix,
}) {
  return (
    <div>
      C'est ici qu'on fait les choix. Pour l'instant je laisse le choix de la
      coterie en dur.
      {phaseChoix === 1 ? (
        <Coteries
          descriptionCourante={descriptionCourante}
          majDescriptionCourante={majDescriptionCourante}
        />
      ) : (
        <Coteries
          descriptionCourante={descriptionCourante}
          majDescriptionCourante={majDescriptionCourante}
        />
      )}
    </div>
  )
}

export default ZoneDeChoix
