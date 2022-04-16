import Banniere from './Banniere'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { PersoContexte } from '../utils/contexte/perso'

function App() {
  const { perso } = useContext(PersoContexte)
  const [phaseChoix, majPhaseChoix] = useState(1)

  useEffect(() => {
    document.title = 'Créateur de personnage Extremis'
  }, [])

  return (
    <div className="App">
      <Banniere perso={perso} />
      <div
        style={{
          backgroundImage: `url(${perso.fond})`,
          backgroundColor: 'transparent',
          opacity: 0.9,
          width: 1280,
          height: 720,
        }}
      >
        <ZoneDeChoix phaseChoix={phaseChoix} majPhaseChoix={majPhaseChoix} />
      </div>
    </div>
  )
}

export default App
