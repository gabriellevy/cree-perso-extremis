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

export const lstVoies = [
  {
    titre: 'Travailleur',
    valeur: 0,
    richesse: 1,
    competences: [nomArtisanat, nomEffort],
    description: ['Ouvrier...'],
  },
  {
    titre: 'Scientifique',
    valeur: 0,
    richesse: 1,
    competences: [nomScience, nomMedecine],
    description: [
      'Riche membre de la haute société. Peut-être un prince, un héritier...',
    ],
  },
  {
    titre: 'Saltimbanque',
    valeur: 0,
    richesse: 0,
    competences: [nomAcrobatie, nomActeur, nomMusique],
    description: [
      'Riche membre de la haute société. Peut-être un prince, un héritier...',
    ],
  },
  {
    titre: 'Homme du monde',
    valeur: 0,
    richesse: 3,
    competences: [nomMilieuHauteSociete],
    description: [
      'Riche membre de la haute société. Peut-être un prince, un héritier...',
    ],
  },
  {
    titre: 'Prêtre',
    valeur: 0,
    richesse: 0,
    competences: [nomMiracles, nomMilieuClerge],
    description: [''],
  },
  {
    titre: 'Malandrin',
    valeur: 0,
    richesse: 0,
    competences: [nomDetrousser, nomDiscretion, nomSIntroduire],
    description: [''],
  },
  {
    titre: 'Aventurier',
    valeur: 0,
    richesse: 0,
    competences: [nomSurvie, nomAnimaux, nomResistance],
    description: [
      'Baroudeur coriace, nomade, habitué aux environnements rudes et à la nature sauvage.\n',
    ],
  },
  {
    titre: 'Brute',
    valeur: 0,
    richesse: 0,
    competences: [nomMilieuRue, nomCorpsACorps, nomIntimider, nomForce],
    description: [
      'Loubard qui hante les rues mal famées et règle ses comptes à coup de barre à mine.\n',
    ],
  },
  {
    titre: 'Espion',
    valeur: 0,
    richesse: 0,
    competences: [nomIntuition, nomInvestigation, nomMilieuReseau],
    description: ['Inclut les détectives et enquêteurs de toute sorte.\n'],
  },
  {
    titre: 'Ingénieur',
    valeur: 0,
    richesse: 1,
    competences: [nomInformatique, nomFabricationTechnique, nomReparer],
    description: ['Inclut les détextives et enquêteurs de toute sorte.\n'],
  },
  {
    titre: 'Intellectuel',
    valeur: 0,
    richesse: 1,
    competences: [nomLangues, nomLoi, nomArt],
    description: [''],
  },
  {
    titre: 'Magicien',
    valeur: 0,
    richesse: 0,
    competences: [nomArcanes, nomAlchimie],
    description: [''],
  },
  {
    titre: 'Marchand',
    valeur: 0,
    richesse: 2,
    competences: [nomConvaincre, nomNegoce],
    description: [''],
  },
  {
    titre: 'Soldat',
    valeur: 0,
    richesse: 0,
    competences: [nomCommandement, nomTir],
    description: [
      '+1 arme de tir (pistolet, fusil, fusil à pompe...) +1 armure',
    ],
  },
  {
    titre: 'Voyageur',
    valeur: 0,
    richesse: 1,
    competences: [nomPilotage, nomMilieuMonde],
    description: [
      "Possède au moins un des véhicules qu'il sait conduire via sa compétence pilotage. À estimer avec le maître de jeu selon la fortune du personnage.",
    ],
  },
]
