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
        const male = getRandomInt(2) === 0;
        perso.nom="Marcello Marconi";
        perso.voie="Malandrin";
        perso.age=age;
        perso.male=male;
    }

    console.log("perso.age : " + perso.age)
    console.log("perso.male : " + perso.male)

    return <div className='banniere'>
                {persoSelectionne ? (
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <Portrait className='descriptionPerso' perso={perso}/>
                                </td>
                                <td>
                                    <div className='descriptionPerso'>
                                        {perso.nom}<br/>
                                        {perso.coterie}<br/>
                                        {perso.voie}<br/>
                                        {perso.age}<br/>
                                        {perso.male?"Homme":"Femme"}<br/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                ):(
                <h1>Création de personnage Extremis</h1>
                ) }
        </div>
}

export default Banniere