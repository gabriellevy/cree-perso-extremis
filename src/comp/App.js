import Banniere from './Banniere'
import '../styles/App.css'
import ZoneDeChoix from './ZoneDeChoix'
import { useState, useEffect } from 'react'

function App() {
  const [perso, majPerso] = useState({})
  const [phaseChoix, majPhaseChoix] = useState(1)

  useEffect(() => {
    document.title = perso.coterie
  }, [perso])

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
        <ZoneDeChoix
          perso={perso}
          majPerso={majPerso}
          phaseChoix={phaseChoix}
          majPhaseChoix={majPhaseChoix}
        />
      </div>
    </div>
  )
}

export default App
