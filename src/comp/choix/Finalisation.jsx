import { useState, useEffect } from 'react'
import { nomCotConquistadors } from '../../donnees/lstPortraits'
import { nomCotElfes } from '../../donnees/lstPortraits'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'

function Finalisation({ perso, majPerso }) {
  const [age, majAge] = useState(perso.age)
  const [nom, majNom] = useState(perso.nom)

  function majNomLocal(nom) {
    majNom(nom)
    majPerso({
      coterie: perso.coterie,
      age: age,
      nom: nom,
      voie: perso.voie,
      male: perso.male,
      fond: perso.fond,
    })
  }

  useEffect(() => {
    // générer un nom selon la coterie choisie :
    var nom = 'youpi'
    if (perso.coterie === nomCotConquistadors)
      nom = genNomConquistador(perso.male)
    else if (perso.coterie === nomCotElfes) nom = genNomElfe(perso.male)
    // A FAIRE : génération de noms pour chaque coterie

    majNomLocal(nom)
  }, [perso.male])

  function gererNom(e) {
    majNomLocal(e.target.value)
  }
  function gererAge(e) {
    majAge(e.target.value)
    majPerso({
      coterie: perso.coterie,
      age: e.target.value,
      nom: nom,
      voie: perso.voie,
      male: perso.male,
      fond: perso.fond,
    })
  }
  function gererSexe(e) {
    const male = e.target.value === 'male'
    majPerso({
      coterie: perso.coterie,
      age: perso.age,
      nom: perso.nom,
      voie: perso.voie,
      male: male,
      fond: perso.fond,
    })
  }

  return (
    <div style={{ padding: '0px 15px 0px 15px' }}>
      <div className="texteStandard">
        <form>
          Nom :
          <input
            type="text"
            id="nom"
            placeholder="Nom du perso"
            onChange={gererNom}
            value={nom}
          />
          <br />
          Âge :
          <input
            type="text"
            id="age"
            maxLength={3}
            pattern="[+-]?\d+(?:[.,]\d+)?"
            placeholder="Âge du perso"
            onChange={gererAge}
            value={age}
          />
          <br />
          <div onChange={gererSexe}>
            <label>
              <input
                type="radio"
                checked={perso.male}
                value="male"
                name="gender"
              />
              Homme
            </label>
            <label>
              <input
                type="radio"
                checked={!perso.male}
                value="femelle"
                name="gender"
              />
              Femme
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Finalisation
