import '../styles/Banniere.css'
import Portrait from './Portrait'
import { useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'
import { getRandomInt } from '../utils/rand'
import { lstComps } from '../donnees/lstComps'
import { render } from '@testing-library/react'

function Banniere() {
  const { perso } = useContext(PersoContexte)
  const persoSelectionne = Object.entries(perso).length !== 0

  if (persoSelectionne) {
    const male = getRandomInt(2) === 0
    if (perso.nom === undefined) {
      perso.nom = 'Marcello Marconi'
    }
    if (perso.voie === undefined) {
      perso.voie = 'Malandrin'
    }
    if (perso.age === undefined) {
      const age = getRandomInt(60) + 15
      perso.age = age
    }
    if (perso.male === undefined) {
      perso.male = male
    }
  }
  return (
    <div className="banniere">
      {persoSelectionne ? (
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Portrait className="descriptionPerso" perso={perso} />
                </td>
                <td>
                  <div className="descriptionPerso">
                    DEX : {perso.dexterite}
                    <br />
                    CON : {perso.constitution}
                    <br />
                    CHA : {perso.charisme}
                    <br />
                    INT : {perso.intelligence}
                    <br />
                    SENS : {perso.sensibilite}
                    <br />
                    MAG : {perso.magie}
                    <br />
                  </div>
                </td>
                <td>
                  <div className="descriptionPerso">
                    {perso.nom}
                    <br />
                    {perso.coterie}
                    <br />
                    {perso.voie}
                    <br />
                    {perso.age} ans
                    <br />
                    {perso.male ? 'Homme' : 'Femme'}
                    <br />
                  </div>
                </td>
                <td>
                  <div className="descriptionPerso">
                    <b>Compétences : </b>
                    {lstComps.map(({ titre, valeur, description }) =>
                      valeur > 0 ? (
                        <span title={description}>
                          {titre} ({valeur}),
                        </span>
                      ) : (
                        ''
                      )
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Création de personnage Extremis</h1>
      )}
    </div>
  )
}

export default Banniere
