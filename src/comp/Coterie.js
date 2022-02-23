import '../styles/Coterie.css'
import { useState } from 'react'

function Coterie({ titre, portrait, bg, description, majDescriptionCourante }) {
	return (
		<li className='lstCoteries_li' onClick={() => majDescriptionCourante({
			texte: description,
			bg: bg
			})}>
			<img className='lstCoteries_img' src={portrait} alt={`${titre} portrait`} />
			<div className="textCoterie">
				{titre}
			</div>
		</li>
	)
}

export default Coterie
