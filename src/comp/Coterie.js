import '../styles/Coterie.css'
import { useState, useEffect } from 'react'

function Coterie({ titre, portrait, bg, description, descriptionCourante, majDescriptionCourante }) {

	function appliquerSelection() {
		majDescriptionCourante({
			texte: description,
			bg: bg,
			titre: titre
			});
	}

	var selection = descriptionCourante.titre === titre;
	
	return (
		<li className={selection ? 'lstCoteries_li_selection':'lstCoteries_li'}
		 id={titre} onClick={() => appliquerSelection()}>
			<img className='lstCoteries_img' src={portrait} alt={`${titre} portrait`} />
			<div>
				<button className={selection ? 'boutonCoterie_selection':'boutonCoterie'}>
					{titre}
				</button>
			</div>
		</li>
	)
}

export default Coterie
