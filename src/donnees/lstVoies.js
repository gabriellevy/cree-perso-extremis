import { getRandomInt } from '../utils/rand'
import { nomSurvie } from './lstComps'
import { nomResistance } from './lstComps'
import { nomAnimaux } from './lstComps'
import { nomMilieuRue } from './lstComps'
import { nomForce } from './lstComps'
import { nomCorpsACorps } from './lstComps'
import { nomIntimider } from './lstComps'
import { nomConvaincre } from './lstComps'
import { nomNegoce } from './lstComps'
import { nomIntuition } from './lstComps'
import { nomInvestigation } from './lstComps'
import { nomMilieuReseau } from './lstComps'
import { nomCommandement } from './lstComps'
import { nomTir } from './lstComps'
import { nomFabricationTechnique } from './lstComps'
import { nomInformatique } from './lstComps'
import { nomReparer } from './lstComps'
import { nomLoi } from './lstComps'
import { nomArt } from './lstComps'
import { nomLangues } from './lstComps'
import { nomAlchimie } from './lstComps'
import { nomArcanes } from './lstComps'
import { nomPilotage } from './lstComps'
import { nomMilieuMonde } from './lstComps'
import { nomDetrousser } from './lstComps'
import { nomDiscretion } from './lstComps'
import { nomSIntroduire } from './lstComps'
import { nomMiracles } from './lstComps'
import { nomMilieuClerge } from './lstComps'
import { nomMilieuHauteSociete } from './lstComps'
import { nomActeur } from './lstComps'
import { nomAcrobatie } from './lstComps'
import { nomMusique } from './lstComps'
import { nomScience } from './lstComps'
import { nomMedecine } from './lstComps'
import { nomArtisanat } from './lstComps'
import { nomEffort } from './lstComps'

export const voieMagicien = 'Magicien'
export const voieIntellectuel = 'Intellectuel'
export const voieHommeDuMonde = 'Homme du monde'
export const voieAventurier = 'Aventurier'
export const voieMalandrin = 'Malandrin'
export const voieMarchand = 'Marchand'
export const voieTravailleur = 'Travailleur'
export const voiePretre = 'Prêtre'
export const voieBrute = 'Brute'
export const voieEspion = 'Espion'
export const voieSaltimbanque = 'Saltimbanque'
export const voieIngenieur = 'Ingénieur'
export const voieSoldat = 'Soldat'
export const voieVoyageur = 'Voyageur'
export const voieScientifique = 'Scientifique'

export function getVoie(idVoie) {
  for (let i = 0; i < lstVoies.length; i++) {
    const voie = lstVoies[i]
    if (voie.titre === idVoie) {
      return voie
    }
  }
  return null
}

export function getEvtAleatoireVoie(idVoie, nb) {
  var voieObj = getVoie(idVoie)
  var evts = []
  for (let i = 0; i < nb; i++) {
    evts.push(voieObj.evts[getRandomInt(voieObj.evts.length)])
  }
  return evts
}

export const lstVoies = [
  {
    titre: voieMarchand,
    deDeVie: 0,
    valeur: 0,
    richesse: 2,
    competences: [nomConvaincre, nomNegoce],
    description: [''],
  },
  {
    titre: voieMalandrin,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomDetrousser, nomDiscretion, nomSIntroduire],
    description: [''],
  },
  {
    titre: voieAventurier,
    deDeVie: 3,
    valeur: 0,
    richesse: 0,
    competences: [nomSurvie, nomAnimaux, nomResistance],
    description: [
      'Baroudeur coriace, nomade, habitué aux environnements rudes et à la nature sauvage.\n',
    ],
  },
  {
    titre: voieTravailleur,
    deDeVie: 3,
    valeur: 0,
    richesse: 1,
    competences: [nomArtisanat, nomEffort],
    evts: [
      {
        description: 'Ouvrier de gratte-ciel à la défense',
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Agriculteur',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Syndicaliste',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Ouvrier qualifié en électronique et mécanique',
        bonusCompetence: nomFabricationTechnique,
      },
      {
        description: 'Déménageur',
        bonusCompetence: nomForce,
      },
      {
        description: 'Chauffeur poids lourd',
        bonusCompetence: nomPilotage,
      },
      {
        description: 'Mécanicien',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Plombier',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Électricien',
        bonusCompetence: nomReparer,
      },
      {
        description: 'A travaillé sur des matières toxiques',
        bonusCompetence: nomResistance,
      },
    ],
    description: ['Ouvrier...'],
  },
  {
    titre: voieScientifique,
    deDeVie: 0,
    valeur: 0,
    richesse: 1,
    competences: [nomScience, nomMedecine],
    description: [''],
  },
  {
    titre: voieSaltimbanque,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomAcrobatie, nomActeur, nomMusique],
    description: [''],
  },
  {
    titre: voieHommeDuMonde,
    deDeVie: 0,
    valeur: 0,
    richesse: 3,
    competences: [nomMilieuHauteSociete],
    description: [
      'Riche membre de la haute société. Peut-être un prince, un héritier...',
    ],
  },
  {
    titre: voiePretre,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomMiracles, nomMilieuClerge],
    description: [''],
  },
  {
    titre: voieBrute,
    deDeVie: 4,
    valeur: 0,
    richesse: 0,
    competences: [nomMilieuRue, nomCorpsACorps, nomIntimider, nomForce],
    description: [
      'Loubard qui hante les rues mal famées et règle ses comptes à coup de barre à mine.\n',
    ],
  },
  {
    titre: voieEspion,
    deDeVie: 1,
    valeur: 0,
    richesse: 0,
    competences: [nomIntuition, nomInvestigation, nomMilieuReseau],
    description: ['Inclut les détectives et enquêteurs de toute sorte.\n'],
  },
  {
    titre: voieIngenieur,
    deDeVie: 0,
    valeur: 0,
    richesse: 1,
    competences: [nomInformatique, nomFabricationTechnique, nomReparer],
    description: [''],
  },
  {
    titre: voieIntellectuel,
    deDeVie: 0,
    valeur: 0,
    richesse: 1,
    competences: [nomLangues, nomLoi, nomArt],
    description: [''],
  },
  {
    titre: voieMagicien,
    deDeVie: 0,
    valeur: 0,
    richesse: 0,
    competences: [nomArcanes, nomAlchimie],
    description: [''],
  },
  {
    titre: voieSoldat,
    deDeVie: 3,
    valeur: 0,
    richesse: 0,
    competences: [nomCommandement, nomTir],
    description: [
      '+1 arme de tir (pistolet, fusil, fusil à pompe...) +1 armure',
    ],
  },
  {
    titre: voieVoyageur,
    deDeVie: 1,
    valeur: 0,
    richesse: 1,
    competences: [nomPilotage, nomMilieuMonde],
    description: [
      "Possède au moins un des véhicules qu'il sait conduire via sa compétence pilotage. À estimer avec le maître de jeu selon la fortune du personnage.",
    ],
  },
]
