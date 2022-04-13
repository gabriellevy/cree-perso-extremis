import Coterie from '../Coterie'
import { lstCoteries } from '../../donnees/lstCoteries'
import '../../styles/Coteries.css'
import ZoneDeValidation from './coteries/ZoneDeValidation'
import { useState } from 'react'

function Coteries({ phaseChoix, majPhaseChoix }) {
  const [descriptionCourante, majDescriptionCourante] = useState({
    texte: '',
    fond: '',
    titre: '',
  })

  return (
    <div>
      <ul className="lstCoteries_ul">
        {lstCoteries.map(
          ({ titre, portrait, fonds, description, page, affiche, voies }) =>
            affiche ? (
              <Coterie
                key={titre}
                titre={titre}
                portrait={portrait}
                fonds={fonds}
                description={description}
                descriptionCourante={descriptionCourante}
                majDescriptionCourante={majDescriptionCourante}
                page={page}
                voies={voies}
              />
            ) : (
              ''
            )
        )}
      </ul>
      <ZoneDeValidation
        descriptionCourante={descriptionCourante}
        majDescriptionCourante={majDescriptionCourante}
        phaseChoix={phaseChoix}
        majPhaseChoix={majPhaseChoix}
      />
    </div>
  )
}

export default Coteries
