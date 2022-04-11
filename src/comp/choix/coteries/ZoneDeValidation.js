import '../../../styles/App.css'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'

function ZoneDeValidation({
  descriptionCourante,
  majDescriptionCourante,
  phaseChoix,
  majPhaseChoix,
}) {
  const { perso, setPerso } = useContext(PersoContexte)

  function validerSelection() {
    var changementsAuPerso = {
      coterie: descriptionCourante.titre,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
    majPhaseChoix(phaseChoix + 1)
    majDescriptionCourante({
      texte: '',
    })
  }

  const affiche = descriptionCourante.texte !== ''

  return (
    <div>
      {affiche ? (
        <div style={{ padding: '0px 15px 0px 15px' }}>
          <div className="texteStandard">
            {descriptionCourante.texte}
            <br />
            <a href={descriptionCourante.page}>wiki</a>
            <div className="aligneDroite">
              <button className="bouton" onClick={() => validerSelection()}>
                Sélectionner
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default ZoneDeValidation
