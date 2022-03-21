import { useState, useEffect } from 'react'
import { nomCotConquistadors } from '../../donnees/lstPortraits'
import { nomCotElfes } from '../../donnees/lstPortraits'
import { nomCotOrks } from '../../donnees/lstPortraits'
import { nomCotTempliers } from '../../donnees/lstPortraits'
import { nomCotZaporogues } from '../../donnees/lstPortraits'
import { genNomConquistador } from '../../donnees/coteries/conquistadors/nomsConquistadors'
import { genNomElfe } from '../../donnees/coteries/elfes/nomsElfes'
import { genNomOrk } from '../../donnees/coteries/orks/nomsOrks'
import { genNomTemplier } from '../../donnees/coteries/templiers/nomsTempliers'
import { genNomZaporogue } from '../../donnees/coteries/zaporogues/nomsZaporogues'
import { useContext } from 'react'
import { PersoContexte } from '../../utils/contexte/perso'

function Finalisation() {
  const { perso, setPerso } = useContext(PersoContexte)
  const [age, majAge] = useState(perso.age)
  const [nom, majNom] = useState(perso.nom)

  function majNomLocal(nom) {
    majNom(nom)
    var changementsAuPerso = {
      age: age,
      nom: nom,
    }
    var persoFinal = { ...perso, ...changementsAuPerso }
    setPerso(persoFinal)
  }

  useEffect(() => {
    // générer un nom selon la coterie choisie :
    var nom = 'youpi pas de noms pour cette coterie'
    if (perso.coterie === nomCotConquistadors)
      nom = genNomConquistador(perso.male)
    else if (perso.coterie === nomCotElfes) nom = genNomElfe(perso.male)
    else if (perso.coterie === nomCotOrks) nom = genNomOrk(perso.male)
    else if (perso.coterie === nomCotTempliers) nom = genNomTemplier(perso.male)
    else if (perso.coterie === nomCotZaporogues)
      nom = genNomZaporogue(perso.male)

    majNomLocal(nom)
  }, [perso.male])

  function gererNom(e) {
    majNomLocal(e.target.value)
  }
  function gererAge(e) {
    majAge(e.target.value)
    setPerso({
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
    setPerso({
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
