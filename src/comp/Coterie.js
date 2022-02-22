import '../styles/Coterie.css'
import { useState } from 'react'

function Coterie({ titre, img, description, majDescriptionCourante }) {
	return (
		<li className='lstCoteries_li' onClick={() => majDescriptionCourante({texte: description})}>
			<img className='lstCoteries_img' src={img} alt={`${titre} portrait`} />
			{titre}
		</li>
	)
}

export default Coterie
