import '../../../styles/App.css'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'

import { nomDexterite } from '../../../donnees/lstCaracs'
import { nomConstitution } from '../../../donnees/lstCaracs'
import { nomCharisme } from '../../../donnees/lstCaracs'
import { nomIntelligence } from '../../../donnees/lstCaracs'
import { nomSensibilite } from '../../../donnees/lstCaracs'
import { nomMagie } from '../../../donnees/lstCaracs'

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

    if (descriptionCourante.modifs_caracs !== undefined) {
      descriptionCourante.modifs_caracs.forEach((element) => {
        if (element.carac === nomDexterite)
          changementsAuPerso.dexterite = perso.dexterite + element.val
        if (element.carac === nomConstitution)
          changementsAuPerso.constitution = perso.constitution + element.val
        if (element.carac === nomCharisme)
          changementsAuPerso.charisme = perso.charisme + element.val
        if (element.carac === nomIntelligence)
          changementsAuPerso.intelligence = perso.intelligence + element.val
        if (element.carac === nomSensibilite)
          changementsAuPerso.sensibilite = perso.sensibilite + element.val
        if (element.carac === nomMagie)
          changementsAuPerso.magie = perso.magie + element.val
      })
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
            <br />
            <br />
            {descriptionCourante.voies.length !== 0 ? (
              <div>
                <b>Voies :</b>
                {descriptionCourante.voies.map((voieStr) => (
                  <span key={voieStr}> {voieStr},</span>
                ))}
              </div>
            ) : (
              'voies non définies'
            )}
            <br />
            {descriptionCourante.modifs_caracs !== undefined ? (
              <div>
                <b>Effets sur les caractéristiques : </b>
                {descriptionCourante.modifs_caracs.map((modif_carac) => (
                  <span key={modif_carac.carac}>
                    {' '}
                    {modif_carac.val > 0 ? '+' : ''}
                    {modif_carac.val} {modif_carac.carac},
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            {descriptionCourante.capacite_magique !== '' ? (
              <div>
                <br />
                <b>Capacité magique : </b>
                {descriptionCourante.capacite_magique}
              </div>
            ) : (
              ''
            )}
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
