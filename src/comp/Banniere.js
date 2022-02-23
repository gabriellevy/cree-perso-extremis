import '../styles/Banniere.css'
import { useState, useEffect } from 'react'

function Banniere({perso, majPerso}) {
    const persoSelectionne = Object.entries(perso).length !== 0;

    return <div className='banniere'>
            {persoSelectionne ? (
                <div>perso tmp : -{perso.coterie}-</div>
            ):(
            <h1>Création de personnage Extremis</h1>
            ) }
        </div>
}

export default Banniere