import '../styles/Banniere.css'
import { useState, useEffect } from 'react'
import Portrait from './Portrait';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function Banniere({perso, majPerso}) {
    const persoSelectionne = Object.entries(perso).length !== 0;
    
    if (persoSelectionne) {
        const age = getRandomInt(60)+15;
        perso.nom="Marcello Marconi";
        perso.voie="Malandrin";
        perso.age=age;
    }

    return <div className='banniere'>
                {persoSelectionne ? (
                    <div>
                        <Portrait className='descriptionPerso' perso={perso}/>
                        <div className='descriptionPerso'>
                            {perso.nom}<br/>
                            {perso.coterie}<br/>
                            {perso.voie}<br/>
                            {perso.age}<br/>
                        </div>
                    </div>
                ):(
                <h1>Création de personnage Extremis</h1>
                ) }
        </div>
}

export default Banniere