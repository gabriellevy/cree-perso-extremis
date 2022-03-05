import { useState } from 'react'

function Finalisation({ perso, majPerso }) {
  const [age, majAge] = useState(perso.age)

  function gererAge(e) {
    majAge(e.target.value)
    majPerso({
      coterie: perso.coterie,
      age: e.target.value,
      nom: perso.nom,
      voie: perso.voie,
      male: perso.male,
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
    })
  }

  return (
    <div>
      Finalisation.
      <form>
        Âge :{' '}
        <input
          type="text"
          id="age"
          maxLength={3}
          pattern="[+-]?\d+(?:[.,]\d+)?"
          placeholder="Âge du perso"
          onChange={gererAge}
          value={age}
        />
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
  )
}

export default Finalisation
