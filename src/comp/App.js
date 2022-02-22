import Banniere from './Banniere'
import ZoneDeChoix from './ZoneDeChoix'
import ZoneDeValidation from './ZoneDeValidation'
import { useState } from 'react'

function App() {
  const [descriptionCourante, majDescriptionCourante] = useState({texte: ""})

    return <div>
        <Banniere />
        <ZoneDeChoix descriptionCourante={descriptionCourante} majDescriptionCourante={majDescriptionCourante} />
        <ZoneDeValidation descriptionCourante={descriptionCourante} majDescriptionCourante={majDescriptionCourante}/>
      </div>
}

export default App
