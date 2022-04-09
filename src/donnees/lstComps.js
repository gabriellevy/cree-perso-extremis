import { nomDexterite } from './lstCaracs'
import { nomCharisme } from './lstCaracs'
import { nomConstitution } from './lstCaracs'
import { nomIntelligence } from './lstCaracs'
import { nomSensibilite } from './lstCaracs'
import { nomMagie } from './lstCaracs'

export const nomAnimaux = 'Animaux'
export const nomResistance = 'Résistance'
export const nomSurvie = 'Survie'

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
    titre: nomAnimaux,
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
      'Cette capacité doit être utilisée quand le personnage veut une aide du maître de jeu.\n',
      "Chaque point dans cette compétence permet d'utiliser la capacité une fois par session.\n",
      "Le joueur dit qu'il utilise son intuition sur un sujet, et le maître de jeu effectue un jet de compétence secrètement, puis révèle une réponse au joueur.\n",
      ' - résultat 6 ou moins : ratage cmplet : le joueur reçoit une fausse information\n',
      ' - résultat 7 à 10  : aucune information\n',
      ' - résultat 11 à 1415 ou plus  : une très bonne information\n',
    ],
  },
  {
    titre: 'Investigation',
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Trouver un indice facile (difficulté 8).\n',
      'Trouver un indice difficile (difficulté 16).',
    ],
  },
  {
    titre: 'Langues',
    valeur: 0,
    carac: nomIntelligence,
    description: [
      'Se débrouiller vite fait dans une langue inconnue (difficulté 10).\n',
      'Apprendre une nouvelle langue : le temps nécessaire dépend du score au test de compétence : \n',
      ' - 8 ou moins : raté après un mois de temps gaspillé à essayer.\n',
      ' - 9 à 12 : 5 mois.\n',
      ' - 13 à 17  : 3 mois.\n',
      ' - 18+  : 1 mois.\n',
      'Nombre de langues maîtrisées : +1 au niveau 1, +1au niveau 3, +1 au niveau 5, +1 au niveau 6 (soit 5 langues).\n',
    ],
  },
  {
    titre: 'Loi',
    valeur: 0,
    carac: nomIntelligence,
    description: [
      'Comprendre les lois de sa coterie (difficulté 6).\n',
      'Comprendre les lois des autres coteries (difficulté 10).\n',
      "Connaître une loi obscure d'une autre coterie (difficulté 13).\n",
      'Plaider une affaire dans une autre coterie (difficulté 16).\n',
    ],
  },
  {
    titre: 'Médecine',
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: 'Milieu',
    valeur: 0,
    carac: nomSensibilite,
    description: [
      'Se débrouiller dans un milieu particulier qui doit être précisé avec la compétence.\n',
      "Exemples : réseau d'Information, clergé, haute société, rue, connaissance du monde (voyage)\n",
    ],
  },
  {
    titre: 'Miracles',
    valeur: 0,
    carac: nomMagie,
    description: [
      'Soin léger (difficulté 10).\n',
      'Ressuciter un mort (difficulté 30)\n',
    ],
  },
  {
    titre: 'Musique',
    valeur: 0,
    carac: nomDexterite,
    description: [
      'Niveau 1 : +1 instrument possédé et maîtrisé.\n',
      'Niveau 3 : +1 instrument possédé et maîtrisé.\n',
      'Niveau 5 : +1 instrument possédé et maîtrisé.\n',
      'Niveau 6 : +1 instrument possédé et maîtrisé.\n',
    ],
  },
  {
    titre: 'Négociation, marchandage',
    valeur: 0,
    carac: nomCharisme,
    description: [
      "Inclut la capacité à estimer la valeur d'un objet.\n",
      'Niveau 3 ou plus : une fois apr jour peut tenter un jet de négoce contre celui du marchand. Si le joueur gagne tous les prix du marchands baissent de 10% et ses achats augmentent de 10%\n',
    ],
  },
  {
    titre: 'Pilotage',
    valeur: 0,
    carac: nomDexterite,
    description: [
      ' + 1 véhicule.\n',
      "Un pilote de niveau 1 maîtrise un véhicule auquel s'applique son bonus au jet. Au niveau 3 + 1 un véhicule maîtrise. Au niveau 6  encore +1 véhicule maîtrisé\n",
    ],
  },
  {
    titre: 'Réparer',
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: nomResistance,
    valeur: 0,
    carac: nomConstitution,
    description: ['Résister au poison, à la maladie, aux substances toxiques'],
  },
  {
    titre: 'Science',
    valeur: 0,
    carac: nomIntelligence,
    description: [''],
  },
  {
    titre: "S'introduire",
    valeur: 0,
    carac: nomDexterite,
    description: [''],
  },
  {
    titre: nomSurvie,
    valeur: 0,
    carac: nomIntelligence,
    description: ['survie en pleine nature.'],
  },
  {
    titre: 'Tir',
    valeur: 0,
    carac: nomDexterite,
    description: [''],
  },
]
