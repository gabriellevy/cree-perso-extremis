import Coterie from './Coterie'
import { lstCoteries } from '../donnees/lstCoteries'
import '../styles/Coteries.css';
import { useState } from 'react'

function Coteries({descriptionCourante, majDescriptionCourante}) {

    return <div>
        <ul className='lstCoteries_ul'>
                {lstCoteries.map(({ titre, portrait, bg, description }) => (
					<Coterie
						key={titre}
						titre={titre}
						portrait={portrait}
                        bg={bg}
						description={description}
                        descriptionCourante={descriptionCourante}
                        majDescriptionCourante={majDescriptionCourante}
					/>
                ))}
            </ul>
    </div>
}

export default Coteries