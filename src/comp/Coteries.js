import Coterie from './Coterie'
import { lstCoteries } from '../donnees/lstCoteries'
import '../styles/Coteries.css';
import { useState } from 'react'

function Coteries({descriptionCourante, majDescriptionCourante}) {

    return <div>
        <h3>Liste des coteries</h3>
        <ul className='lstCoteries_ul'>
                {lstCoteries.map(({ titre, portrait, bg, description }) => (
					<Coterie
						key={titre}
						titre={titre}
						portrait={portrait}
                        bg={bg}
						description={description}
                        majDescriptionCourante={majDescriptionCourante}
					/>
                ))}
            </ul>
    </div>
}

export default Coteries