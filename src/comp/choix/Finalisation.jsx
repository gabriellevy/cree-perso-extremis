import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function Finalisation({ perso, majPerso }) {
  const ageAleatoire = getRandomInt(60) + 15
  const [age, majAge] = useState(ageAleatoire)

  function handleInput(e) {
    majAge(e.target.value)
    majPerso({
      coterie: perso.coterie,
      age: e.target.value,
      nom: perso.nom,
      voie: perso.voie,
      male: perso.male,
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
          onChange={handleInput}
          value={age}
        />
      </form>
    </div>
  )
}

export default Finalisation
