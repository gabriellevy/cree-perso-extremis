import '../../../styles/App.css'
import { useContext } from 'react'
import { PersoContexte } from '../../../utils/contexte/perso'

import { getCaracObjPropertyName } from '../../../donnees/lstCaracs'

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
      descriptionCourante.modifs_caracs.forEach((elt) => {
        const caracPropertyName = getCaracObjPropertyName(elt.carac)

        changementsAuPerso[caracPropertyName] =
          perso[caracPropertyName] + elt.val
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
