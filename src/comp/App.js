import Banniere from './Banniere'
import '../styles/App.css';
import ZoneDeChoix from './ZoneDeChoix'
import ZoneDeValidation from './ZoneDeValidation'
import { useState, useEffect } from 'react'

function App() {
  const [descriptionCourante, majDescriptionCourante] = useState({texte: "", bg:"" , titre:""})
  const [perso, majPerso] = useState({})
  console.log("App perso : " + perso.coterie);

	useEffect(() => {
		document.title = perso.coterie
	}, [perso])

    return <div className="App">
        <Banniere perso={perso} majPerso={majPerso}/>
          <div style={{
            backgroundImage: `url(${descriptionCourante.bg})`,
            backgroundColor: 'transparent',
            opacity: 0.9,
            width: 1280,
            height: 720
            }}>
            <ZoneDeChoix descriptionCourante={descriptionCourante} majDescriptionCourante={majDescriptionCourante} />
            <ZoneDeValidation 
              descriptionCourante={descriptionCourante} 
              majDescriptionCourante={majDescriptionCourante}
              perso={perso}
              majPerso={majPerso}/>
          </div>
      </div>
}

export default App
