import { useState, useContext, useEffect } from 'react'
import { getRandomInt } from '../../utils/rand'
import { PersoContexte } from '../../utils/contexte/perso'
import { DragDropContext } from 'react-beautiful-dnd'
import voiesARepartir, {
  idARepartir,
  idVoie1,
  idVoie2,
  idVoie3,
  idVoie4,
  idVoie5,
  idVoie6,
} from './voies/voiesARepartir'
import styled from 'styled-components'
import { lstCoteries } from '../../donnees/lstCoteries'
import DroppableVoie from './voies/DroppableVoie'

const Container = styled.div`
  display: flex;
`

export default function Voies({ phaseChoix, majPhaseChoix }) {
  const [dndDonnees, setDnDDonnees] = useState(voiesARepartir)
  const { perso, setPerso } = useContext(PersoContexte)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    var idCoteriePerso = perso.coterie
    console.log(idCoteriePerso)
    var coteriePerso
    lstCoteries.forEach((coterie) => {
      if (coterie.titre === idCoteriePerso) {
        coteriePerso = coterie
        return
      }
    })

    var data = voiesARepartir

    if (coteriePerso.voies.length > 0) {
      const voie1 = coteriePerso.voies[0]
      data.valeurs[idVoie1].valeur = voie1
      if (coteriePerso.voies.length > 1) {
        const voie2 = coteriePerso.voies[1]
        data.valeurs[idVoie2].valeur = voie2
        if (coteriePerso.voies.length > 2) {
          const voie3 = coteriePerso.voies[2]
          data.valeurs[idVoie3].valeur = voie3
          if (coteriePerso.voies.length > 3) {
            const voie4 = coteriePerso.voies[3]
            data.valeurs[idVoie4].valeur = voie4
            if (coteriePerso.voies.length > 4) {
              const voie5 = coteriePerso.voies[4]
              data.valeurs[idVoie5].valeur = voie5
              if (coteriePerso.voies.length > 5) {
                const voie6 = coteriePerso.voies[5]
                data.valeurs[idVoie6].valeur = voie6
              }
            }
          }
        }
      }
    }

    // setRerender est complèteemnt bidon mais pour une raison qui m'échappe setDnDDonnees ne provoque aps le rafraichissement par lui-même...
    setDnDDonnees(data)
    setRerender(!rerender)
  }, [])

  function validerVoies() {
    var changementsAuPerso = {}
    // TODO MAJ compétences
    // TODO MAJ caracs
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)

    majPhaseChoix(phaseChoix + 1)
  }

  function finGlisserDeposer(result) {
    document.body.style.color = 'inherit'
    document.body.style.transition = 'inherit'
    const { destination, source, draggableId } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    const colonneSource = dndDonnees.colonnes[source.droppableId]
    const colonneDest = dndDonnees.colonnes[destination.droppableId]

    if (colonneSource === colonneDest) {
      const nouvValeursIdsSource = Array.from(colonneSource.valeursIds)
      nouvValeursIdsSource.splice(source.index, 1)
      nouvValeursIdsSource.splice(destination.index, 0, draggableId)

      const nouvCol = {
        ...colonneSource,
        valeursIds: nouvValeursIdsSource,
      }

      const nouvDnDDonnees = {
        ...dndDonnees,
        colonnes: {
          ...dndDonnees.colonnes,
          [nouvCol.id]: nouvCol,
        },
      }

      setDnDDonnees(nouvDnDDonnees)
      return
    }

    const nouvValeursIdsSource = Array.from(colonneSource.valeursIds)
    nouvValeursIdsSource.splice(source.index, 1)
    const newColSrc = {
      ...colonneSource,
      valeursIds: nouvValeursIdsSource,
    }

    const nouvValeursIdsDest = Array.from(colonneDest.valeursIds)
    nouvValeursIdsDest.splice(destination.index, 0, draggableId)
    const newColDest = {
      ...colonneDest,
      valeursIds: nouvValeursIdsDest,
    }
    const nouvDnDDonnees = {
      ...dndDonnees,
      colonnes: {
        ...dndDonnees.colonnes,
        [newColSrc.id]: newColSrc,
        [newColDest.id]: newColDest,
      },
    }

    setDnDDonnees(nouvDnDDonnees)
  }

  var choixValides = true

  Object.values(dndDonnees.colonnes).forEach((colonne) => {
    if (colonne.id !== idARepartir)
      choixValides = choixValides && colonne.valeursIds.length === 1
  })

  return (
    <DragDropContext onDragEnd={finGlisserDeposer}>
      <Container>
        <div>
          <div>
            <h2>
              Faites glisser les voies obtenus slon votre ordre de préférence
            </h2>
            <ul className="lstCoteries_ul">
              {dndDonnees.ordreColonnes.map((idColonne) => {
                const colonne = dndDonnees.colonnes[idColonne]
                const valeurs = colonne.valeursIds.map(
                  (valeurId) => dndDonnees.valeurs[valeurId]
                )

                return (
                  <DroppableVoie
                    key={colonne.id}
                    colonne={colonne}
                    valeurs={valeurs}
                  />
                )
              })}
            </ul>
          </div>
          {choixValides ? (
            <button className="bouton" onClick={() => validerVoies()}>
              Valider
            </button>
          ) : (
            ''
          )}
        </div>
      </Container>
    </DragDropContext>
  )
}
