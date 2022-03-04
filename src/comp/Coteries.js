import Coterie from './Coterie'
import { lstCoteries } from '../donnees/lstCoteries'
import '../styles/Coteries.css'
import { useState } from 'react'

function Coteries({ descriptionCourante, majDescriptionCourante }) {
  return (
    <div>
      <ul className="lstCoteries_ul">
        {lstCoteries.map(({ titre, portrait, fonds, description }) => (
          <Coterie
            key={titre}
            titre={titre}
            portrait={portrait}
            fonds={fonds}
            description={description}
            descriptionCourante={descriptionCourante}
            majDescriptionCourante={majDescriptionCourante}
          />
        ))}
      </ul>
    </div>
  )
}

export default Coteries
