import '../styles/Portrait.css'
import { lstCoteries } from '../donnees/lstCoteries'
import { useState } from 'react'
import { lstPortraits } from '../donnees/lstPortraits';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// génère un portrait selonles données de personnage fournies => mis à jour chaque fois que le personnage change
function Portrait({perso}) {

    // filtrage des portraits dispos selon les caracs de persos

    const portraitsRestants = lstPortraits
        .filter( portrait => perso.coterie === portrait.coterie)
        .filter( portrait => perso.male === portrait.male)
        .filter( portrait => perso.age >= portrait.ageMin)
        .filter( portrait => portrait.ageMax === undefined || perso.age <= portrait.ageMax);

    const portrait=portraitsRestants[getRandomInt(portraitsRestants.length)].image;

    return <div>
        <img className='portrait_img' src={portrait} alt='portrait' />
    </div>
}

export default Portrait