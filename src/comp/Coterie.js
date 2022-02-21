import '../styles/Coterie.css'

function handleClick(description) {
    // au lieu de cette alerte bidon il faudrait remonter cette info de description à un div qui afficherait un apperçu
    // à côté de la liste des coteries et un bouton "choisir" qui valide le choix
	alert(`description : ${description}`)
}

function Coterie({ titre, img, description }) {
	return (
		<li className='lstCoteries_li' onClick={() => handleClick(description)}>
			<img className='lstCoteries_img' src={img} alt={`${titre} portrait`} />
			{titre}
		</li>
	)
}

export default Coterie
