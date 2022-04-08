import { nomDexterite } from './lstCaracs'
import { nomCharisme } from './lstCaracs'
import { nomConstitution } from './lstCaracs'
import { nomIntelligence } from './lstCaracs'
import { nomSensibilite } from './lstCaracs'
import { nomMagie } from './lstCaracs'

export const lstComps = [
  {
    titre: 'Acrobatie',
    valeur: 0,
    carac: nomDexterite,
    description: [
      'Marcher sur un fil (difficulté 15)\n',
      'Faire un salto (difficulté 15)\n',
      'Marcher sur un toit plat (difficulté6)',
    ],
  },
  {
    titre: 'Acteur',
    valeur: 0,
    carac: nomCharisme,
    description: [
      'Inclut le déguisement.\n',
      'Se faire passer pour un passant innocent (difficulté 8).\n',
      "Se faire passer pour un professionnel d'un métier non maîtrisé (difficulté 15).\n",
    ],
  },
  {
    titre: 'Alchimie',
    valeur: 0,
    carac: nomMagie,
    description: ['cf voie des elixirs p93 CoC pour des idées.\n'],
  },
  {
    titre: 'Animaux',
    valeur: 0,
    carac: nomSensibilite,
    description: [
      "Savoir s'occuper d'un animal, le dresser, le dompter.\n",
      'niveau 1 : +1 un animal dressé\n',
      'niveau 3 : +1 un animal dressé\n',
      'niveau 6 : +1 un animal dressé\n',
      "S'occuper d'un chat (difficulté 4)",
      'Dresser un cheval (difficulté 14)',
      'Se comporter face à des requins en plongée (difficulté 15)',
    ],
  },
  {
    titre: 'Arcanes',
    valeur: 0,
    carac: nomMagie,
    description: [
      "Maîtrise une des voies d'arcanes.\n",
      "niveau 1 : +1 une voie d'arcane\n",
      "niveau 3 : +1 une voie d'arcane\n",
      "niveau 6 : +1 une voie d'arcane\n",
      'Copier grosso modo les sorts de donjons et dragons',
    ],
  },
  {
    titre: 'Art',
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Estimer une oeuvre (difficulté 9).\n',
      'Décrire une oeuvre crédiblement (difficulté 7).\n',
      'Décrire une oeuvre en profondeur (difficulté 12).\n',
      'Peindre un tableau de qualité (difficulté 14).\n',
    ],
  },
  {
    titre: 'Artisanat',
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Fabriquer un pot (difficulté 8).\n',
      'Fabriquer un meuble (difficulté 13).\n',
      'Installer un piège (difficulté 9).\n',
      'Concevoir et installer un piège (difficulté 14).\n',
    ],
  },
  {
    titre: 'Commandement',
    valeur: 0,
    carac: nomCharisme,
    description: [
      'Commander une escouade (difficulté 8).\n',
      'COmmander un navire (difficulté 13).\n',
    ],
  },
  {
    titre: 'Convaincre',
    valeur: 0,
    carac: nomCharisme,
    description: [''],
  },
  {
    titre: 'Corps à corps',
    valeur: 0,
    carac: nomConstitution,
    description: [
      '+1 arme de contact au choix :  Poing américain, lame rétractile, épée, couteau militaire',
    ],
  },
  {
    titre: 'Détrousser',
    valeur: 0,
    carac: nomSensibilite,
    description: [''],
  },
  {
    titre: 'Discrétion',
    valeur: 0,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: 'Effort',
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Efforts physiques soutenus, endurance.\n',
      'Pousser une voiture en plein soleil (difficulté 8).\n',
      "Faire une journée de travail d'éboueur (difficulté 7).\n",
    ],
  },
  {
    titre: 'Fabrication technique',
    valeur: 0,
    carac: nomIntelligence,
    description: ['Mécanique, électronique, informatique.\n'],
  },
  {
    titre: 'Force',
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Déménager une armoire (difficulté 8).\n',
      "Soulever l'arrière d'une voiture (difficulté 16).\n",
    ],
  },
  {
    titre: 'Informatique',
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: 'Intimider',
    valeur: 0,
    carac: nomConstitution,
    description: [
      'Pousser un videur à nous laisser entrerd ans une boîte très branchée (difficulté 9)',
    ],
  },
  {
    titre: 'Intuition',
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Cette capacité doit être utilisée quand le personnage veut une aide du maître de jeu.',
      "Chaque point dans cette compétence permet d'utiliser la capacité une fois par session.",
      "Le joueur dit qu'il utilise son intuition sur un sujet, et le maître de jeu effectue un jet de compétence secrètement, puis révèle une réponse au joueur.",
      ' - résultat 6 ou moins : ratage cmplet : le joueur reçoit une fausse information',
      ' - résultat 7 à 10  : aucune information',
      ' - résultat 11 à 1415 ou plus  : une très bonne information',
    ],
  },
]
