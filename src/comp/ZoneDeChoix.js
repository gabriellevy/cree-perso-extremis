import Coteries from './Coteries'
import { useState } from 'react'

function ZoneDeChoix({descriptionCourante, majDescriptionCourante}) {
    return <div>
        C'est ici qu'on fait les choix. Pour l'instant je laisse le choix de la coterie en dur.
        <Coteries descriptionCourante={descriptionCourante} majDescriptionCourante={majDescriptionCourante}/>
    </div>
}

export default ZoneDeChoix