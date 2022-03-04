import '../styles/Coterie.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function Coterie({
  titre,
  portrait,
  fonds,
  description,
  descriptionCourante,
  majDescriptionCourante,
}) {
  function appliquerSelection() {
    var fond = fonds[getRandomInt(fonds.length)]

    majDescriptionCourante({
      texte: description,
      fond: fond,
      titre: titre,
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
