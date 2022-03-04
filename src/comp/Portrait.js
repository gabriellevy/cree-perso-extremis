import '../styles/Portrait.css'
import { lstPortraits } from '../donnees/lstPortraits'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

// génère un portrait selonles données de personnage fournies => mis à jour chaque fois que le personnage change
function Portrait({ perso }) {
  // filtrage des portraits dispos selon les caracs de persos

  const portraitsRestants = lstPortraits
    .filter(
      (portrait) =>
        portrait.coterie === undefined || perso.coterie === portrait.coterie
    )
    .filter((portrait) => perso.male === portrait.male)
    .filter(
      (portrait) =>
        portrait.ageMin === undefined || perso.age >= portrait.ageMin
    )
    .filter(
      (portrait) =>
        portrait.ageMax === undefined || perso.age <= portrait.ageMax
    )
  // A FAIRE : ne prendre les portraits sans coterie que si on n'en a pas de la bonne coterie

  var portrait
  if (portraitsRestants.length > 0)
    portrait = portraitsRestants[getRandomInt(portraitsRestants.length)].image

  return (
    <div className="zonePortrait">
      {portraitsRestants.length > 0 ? (
        <img className="portrait_img" src={portrait} alt="portrait" />
      ) : (
        <div>Pas de portrait pour ce perso</div>
      )}
    </div>
  )
}

export default Portrait
