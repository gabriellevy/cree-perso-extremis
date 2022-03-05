import '../styles/App.css'

function ZoneDeValidation({
  descriptionCourante,
  majPerso,
  phaseChoix,
  majPhaseChoix,
}) {
  function validerSelection() {
    const persoL = {
      coterie: descriptionCourante.titre,
    }
    majPerso(persoL)
    majPhaseChoix(phaseChoix + 1)
  }

  return (
    <div>
      <div style={{ padding: '0px 15px 0px 15px' }}>
        <div className="texteStandard">
          {descriptionCourante.texte}
          <div className="aligneDroite">
            <button className="bouton" onClick={() => validerSelection()}>
              Sélectionner
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZoneDeValidation
