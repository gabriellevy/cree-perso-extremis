import '../styles/Coterie.css'
import { getRandomInt } from '../utils/rand'

function Coterie({
  titre,
  portrait,
  fonds,
  description,
  descriptionCourante,
  majDescriptionCourante,
  majPerso,
}) {
  function appliquerSelection() {
    var fond = fonds[getRandomInt(fonds.length)]

    majDescriptionCourante({
      texte: description,
      titre: titre,
    })
    majPerso({
      fond: fond,
    })
  }

  var selection = descriptionCourante.titre === titre

  return (
    <li
      className={selection ? 'lstCoteries_li_selection' : 'lstCoteries_li'}
      id={titre}
      onClick={() => appliquerSelection()}
    >
      <img
        className="lstCoteries_img"
        src={portrait}
        alt={`${titre} portrait`}
      />
      <div>
        <button
          className={selection ? 'boutonCoterie_selection' : 'boutonCoterie'}
        >
          {titre}
        </button>
      </div>
    </li>
  )
}

export default Coterie
