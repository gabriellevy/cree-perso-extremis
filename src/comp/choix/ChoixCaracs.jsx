import '../../styles/Coteries.css'
import { useState, useContext } from 'react'
import { getRandomInt } from '../../utils/rand'
import { PersoContexte } from '../../utils/contexte/perso'
import '../../styles/Caracs.css'
import Colonne from './caracs/Colonne'
//import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import donneesInitiales from './caracs/DnDDonnees'

function TirerDes() {
  var valTiree1 = getRandomInt(6) + getRandomInt(6) + 2
  var valTiree2 = getRandomInt(6) + getRandomInt(6) + 2
  var valTiree3 = getRandomInt(6) + getRandomInt(6) + 2

  var data = donneesInitiales

  data.valeurs['tirage-1'].valeur = valTiree1 + 6
  data.valeurs['tirage-2'].valeur = 19 - valTiree1
  data.valeurs['tirage-3'].valeur = valTiree2 + 6
  data.valeurs['tirage-4'].valeur = 19 - valTiree2
  data.valeurs['tirage-5'].valeur = valTiree3 + 6
  data.valeurs['tirage-6'].valeur = 19 - valTiree3

  return data
}

function Caracs({ phaseChoix, majPhaseChoix }) {
  const [dndDonnees, setDnDDonnees] = useState(TirerDes())
  const { perso, setPerso } = useContext(PersoContexte)

  function validerCaracs() {
    var changementsAuPerso = {
      dexterite: perso.dexterite + dndDonnees['carac-1'].valeursIds[0],
      constitution: perso.constitution + dndDonnees['carac-2'].valeursIds[1],
      charisme: perso.charisme + dndDonnees['carac-3'].valeursIds[2],
      intelligence: perso.intelligence + dndDonnees['carac-4'].valeursIds[3],
      sensibilite: perso.sensibilite + dndDonnees['carac-5'].valeursIds[4],
      magie: perso.magie + dndDonnees['carac-6'].valeursIds[5],
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)

    majPhaseChoix(phaseChoix + 1)
  }

  function finGlisserDeposer(result) {}

  const choixValides = false // TODO : ajouter un test sur est-ce que les 6 caracs ont une valeur assocée

  return (
    <DragDropContext onDragEnd={finGlisserDeposer}>
      <div className="texteStandard">
        {choixValides ? (
          <button className="bouton" onClick={() => validerCaracs()}>
            Valider
          </button>
        ) : (
          <div>
            <h1>Sélection des valeurs de carac</h1>
            {dndDonnees.ordreColonnes.map((idColonne) => {
              const colonne = dndDonnees.colonnes[idColonne]
              const valeurs = colonne.valeursIds.map(
                (valeurId) => dndDonnees.valeurs[valeurId]
              )

              return (
                <Colonne key={colonne.id} colonne={colonne} valeurs={valeurs} />
              )
            })}
          </div>
        )}
      </div>
    </DragDropContext>
  )
}

export default Caracs
