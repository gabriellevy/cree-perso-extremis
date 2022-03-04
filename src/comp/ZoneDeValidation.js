import '../styles/App.css'

function ZoneDeValidation({ descriptionCourante, majPerso }) {
  function validerSelection() {
    const persoL = {
      coterie: descriptionCourante.titre,
    }
    majPerso(persoL)
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
