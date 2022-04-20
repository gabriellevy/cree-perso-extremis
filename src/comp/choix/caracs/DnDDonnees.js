import {
  nomCharisme,
  nomConstitution,
  nomDexterite,
  nomIntelligence,
  nomMagie,
  nomSensibilite,
} from '../../../donnees/lstCaracs'

const donneesInitiales = {
  valeurs: {
    'tirage-1': {
      id: 'tirage-1',
      valeur: -1,
    },
    'tirage-2': {
      id: 'tirage-2',
      valeur: -1,
    },
    'tirage-3': {
      id: 'tirage-3',
      valeur: -1,
    },
    'tirage-4': {
      id: 'tirage-4',
      valeur: -1,
    },
    'tirage-5': {
      id: 'tirage-5',
      valeur: -1,
    },
    'tirage-6': {
      id: 'tirage-6',
      valeur: -1,
    },
  },
  colonnes: {
    'carac-1': {
      id: nomDexterite,
      description: 'description Dextérité',
      valeursIds: [],
    },
    'carac-2': {
      id: nomConstitution,
      description:
        'Puissance physique au sens large : résistance, endurance, force...',
      valeursIds: [],
    },
    'carac-3': {
      id: nomCharisme,
      description: 'description Charisme',
      valeursIds: [],
    },
    'carac-4': {
      id: nomIntelligence,
      description: 'description Intelligence',
      valeursIds: [],
    },
    'carac-5': {
      id: nomSensibilite,
      description:
        'Perception au sens large, inclut :\n     - la finesse des sens\n     - la perception de la magie\n     - la perception psychologique',
      valeursIds: [],
    },
    'carac-6': {
      id: nomMagie,
      description: 'description Magie',
      valeursIds: [],
    },
    tirages: {
      id: 'tirages',
      description: 'Valeurs à répartir dans les caracs',
      valeursIds: [
        'tirage-1',
        'tirage-2',
        'tirage-3',
        'tirage-4',
        'tirage-5',
        'tirage-6',
      ],
    },
  },
  ordreColonnes: [
    'carac-1',
    'carac-2',
    'carac-3',
    'carac-4',
    'carac-5',
    'carac-6',
    'tirages',
  ],
}

export default donneesInitiales
