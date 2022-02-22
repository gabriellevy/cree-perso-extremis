import Banniere from './Banniere'
import ZoneDeChoix from './ZoneDeChoix'
import ZoneDeValidation from './ZoneDeValidation'
import { useState } from 'react'

function App() {
  const [descriptionCourante, majDescriptionCourante] = useState({texte: "", bg:"" })

    return <div>
        <Banniere />
          <div style={{
            backgroundImage: `url(${descriptionCourante.bg})`,
            width: 1280,
            height: 720
            }}>
            <ZoneDeChoix descriptionCourante={descriptionCourante} majDescriptionCourante={majDescriptionCourante} />
            <ZoneDeValidation descriptionCourante={descriptionCourante} majDescriptionCourante={majDescriptionCourante}/>
          </div>
      </div>
}

export default App
