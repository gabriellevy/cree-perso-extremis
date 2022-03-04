import Banniere from './Banniere'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import ZoneDeValidation from './ZoneDeValidation'
import { useState, useEffect } from 'react'

function App() {
  const [descriptionCourante, majDescriptionCourante] = useState({
    texte: '',
    fond: '',
    titre: '',
  })
  const [perso, majPerso] = useState({})

  useEffect(() => {
    document.title = perso.coterie
  }, [perso])

  return (
    <div className="App">
      <Banniere perso={perso} majPerso={majPerso} />
      <div
        style={{
          backgroundImage: `url(${descriptionCourante.fond})`,
          backgroundColor: 'transparent',
          opacity: 0.9,
          width: 1280,
          height: 720,
        }}
      >
        <ZoneDeChoix
          descriptionCourante={descriptionCourante}
          majDescriptionCourante={majDescriptionCourante}
        />
        <ZoneDeValidation
          descriptionCourante={descriptionCourante}
          majPerso={majPerso}
        />
      </div>
    </div>
  )
}

export default App
