import portrait_conquistador from './img/conquistadors/portraits/portrait_20-50_b.jpg'
import portrait_elfe from './img/elfes/portraits/portrait_30_50_d.jpg'
import portrait_ork from './img/orks/portraits/portrait_15+.jpg'
import portrait_templier from './img/templiers/portraits/20-40.jpg'
import portrait_transhumaniste from './img/transhumanistes/portraits/portrait15-30_2.jpg'
import portrait_zaporogue from './img/zaporogues/portraits/20-45.jpg'
import portrait_acheron from './img/acheron/portraits/f20_50.jpg'
import portrait_saabi from './img/saabi/portraits/f16_35.jpg'
import portrait_cathare from './img/cathares/portraits/28_48.jpg'
import portrait_celte from './img/celtes/portraits/20_45.jpg'
import portrait_chat from './img/chats/portraits/chat.jpg'
import portrait_skavens from './img/skavens/portraits/30_65.jpg'
import portrait_schweizer from './img/schweizer/portraits/30_60.jpg'
import portrait_tyranide from './img/tyranides/portraits/30_60.jpg'
import portrait_lumieres from './img/lumieres/portraits/20_45.jpg'

import bg_conquistador from './img/conquistadors/bg_conquistadors_priant.jpg'
import bg_conquistador_b from './img/quartiers/bg_saint_malo.jpg'
import bg_elfe from './img/elfes/bg_musicien.jpg'
import bg_elfe_b from './img/quartiers/bg_saint_germain_en_laye.jpg'
import bg_ork from './img/orks/bg_avion_ork.jpg'
import bg_ork_b from './img/quartiers/bg_poissy.jpg'
import bg_templier from './img/templiers/bg_priant.jpg'
import bg_templier_b from './img/quartiers/bg_interieur_basilique.jpg'
import bg_templier_c from './img/quartiers/bg_saint_denis.jpg'
import bg_transhumaniste from './img/transhumanistes/bg_univ_transhumanistes.jpg'
import bg_transhumaniste_b from './img/quartiers/bg_la_defense.jpg'
import bg_zaporogue from './img/zaporogues/bg_lettre_zapo.jpg'
import bg_zaporogue_b from './img/zaporogues/bg_univ_zaporogues.jpg'
import bg_acheron from './img/acheron/bg_acheron.jpg'
import bg_skavens from './img/skavens/bg_skavens.jpg'
import bg_schweizer from './img/schweizer/bg.png'
import bg_tyranide from './img/tyranides/bg.jpg'
import bg_lumieres from './img/lumieres/bg.jpg'

import {
  nomDexterite,
  nomConstitution,
  nomCharisme,
  nomIntelligence,
  nomSensibilite,
  nomMagie,
} from './lstCaracs'

import {
  nomAcrobatie,
  nomActeur,
  nomAlchimie,
  nomAnimaux,
  nomArcanes,
  nomArt,
  nomArtisanat,
  nomCommandement,
  nomConvaincre,
  nomCorpsACorps,
  nomDetrousser,
  nomDiscretion,
  nomEffort,
  nomFabricationTechnique,
  nomForce,
  nomInformatique,
  nomIntimider,
  nomInvestigation,
  nomLoi,
  nomMedecine,
  nomMiracles,
  nomMusique,
  nomNegoce,
  nomPilotage,
  nomReparer,
  nomResistance,
  nomScience,
  nomSIntroduire,
  nomSurvie,
  nomTir,
} from './lstComps'

import {
  voieIngenieur,
  voieMagicien,
  voieScientifique,
  voieSoldat,
  voieVoyageur,
  voieIntellectuel,
  voieHommeDuMonde,
  voieAventurier,
  voieMalandrin,
  voieMarchand,
  voieTravailleur,
  voiePretre,
  voieBrute,
  voieSaltimbanque,
  voieEspion,
} from './lstVoies'
import { getRandomInt } from '../utils/rand'

export const nomCotConquistadors = 'Conquistadors'
export const nomCotElfes = 'Elfes'
export const nomCotOrks = 'Orks'
export const nomCotZaporogues = 'Zaporogues'
export const nomCotTranshumanistes = 'Transhumanistes'
export const nomCotTempliers = 'Templiers'
export const nomCotAcheron = 'Ach??ron'
export const nomCotSaabi = 'Saabi'
export const nomCotCathares = 'Cathares'
export const nomCotCelte = 'Celtes'
export const nomCotChats = 'Chats'
export const nomCotSkavens = 'Skavens'
export const nomCotSchweiser = 'Schweiser'
export const nomCotTyranides = 'Tyranides'
export const nomCotLumieres = 'Lumi??res'

export function getCoterieObj(idCoterie) {
  var coterieObj
  lstCoteries.forEach((coterie) => {
    if (coterie.titre === idCoterie) {
      coterieObj = coterie
    }
  })
  return coterieObj
}

export function getEvtAleatoireCoterie(idCoterie, nb) {
  var coterieObj = getCoterieObj(idCoterie)
  var evts = []
  if (coterieObj.evts.length > 0) {
    for (let i = 0; i < nb; i++) {
      evts.push(coterieObj.evts[getRandomInt(coterieObj.evts.length)])
    }
  }
  return evts
}

export const lstCoteries = [
  {
    titre: nomCotLumieres,
    deDeVie: 1,
    voies: [
      voieScientifique,
      voieHommeDuMonde,
      voieEspion,
      voieIntellectuel,
      voieMarchand,
    ],
    affiche: true,
    portrait: portrait_lumieres,
    fonds: [bg_lumieres],
    evts: [
      {
        description: 'Transforme ses arguments en r??alit??',
        bonusCompetence: nomConvaincre,
      },
      {
        description: 'Duelliste',
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Journaliste',
        bonusCompetence: nomInvestigation,
      },
      {
        description: 'Humanitaire l??galiste',
        bonusCompetence: nomLoi,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Lumi-res-228ae184d41a42209307684589fbd81c',
    description: 'Pas fait',
  },
  {
    titre: nomCotTyranides,
    deDeVie: 2,
    voies: [voieTravailleur, voieEspion, voieBrute],
    affiche: true,
    portrait: portrait_tyranide,
    fonds: [bg_tyranide],
    evts: [
      {
        description: "Agile comme l'insecte",
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Ancien ill??gal camoufl??',
        bonusCompetence: nomActeur,
      },
      {
        description: 'Constructeur de ruche',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Dominant de ruche',
        bonusCompetence: nomCommandement,
      },
      {
        description: 'Gardien de ruche',
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Traqu?? par les purificateurs',
        bonusCompetence: nomDiscretion,
      },
      {
        description: 'Excroissances insecto??des',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Insensible ?? la douleur',
        bonusCompetence: nomResistance,
      },
      {
        description: 'Instinct animal',
        bonusCompetence: nomSurvie,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Tyranides-c4980eadc51e47f7b1c42126f5aa0588',
    description: 'Pas fait',
  },
  {
    titre: nomCotTempliers,
    deDeVie: 1,
    voies: [
      voieAventurier,
      voieSoldat,
      voieTravailleur,
      voiePretre,
      voieVoyageur,
    ],
    objets: ['??p??e rituelle'],
    modifs_caracs: [{ carac: nomCorpsACorps, val: 2 }],
    evts: [
      {
        description: 'P??nitence par le travail gratuit',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Pauvre mais construit ses propres objets',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Paladin',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'Banquiers',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Volont?? surnaturelle',
        bonusCompetence: nomResistance,
      },
    ],
    affiche: true,
    portrait: portrait_templier,
    fonds: [bg_templier, bg_templier_b, bg_templier_c],
    page: 'https://www.notion.so/wiki-extremis/Templiers-c00f7ed56be2424f9a0baf1797328dfb',
    description:
      "Bas??e sur la foi in??branlable en Dieu et sur l'honneur guerrier de l'aristocratie franque. Les templiers sont avant tout des guerriers saints qui suivent un code de l'honneur tr??s strict. Forc??ment chr??tien, Richesse limit??e ?? 1 maximum.",
  },
  {
    titre: nomCotSchweiser,
    deDeVie: 1,
    voies: [
      voieTravailleur,
      voieScientifique,
      voieIngenieur,
      voiePretre,
      voieMarchand,
    ],
    modifs_caracs: [{ carac: nomMagie, val: -1 }],
    evts: [
      {
        description: 'Form?? ?? la dure quand il ??tait ??tudiant',
        bonusCompetence: nomEffort,
      },
      {
        description: 'Fabricants de meubles en sapin',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Bourgeois responsable',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Service militaire',
        bonusCompetence: nomTir,
      },
    ],
    affiche: true,
    niveau_richesse: 2,
    portrait: portrait_schweizer,
    fonds: [bg_schweizer],
    page: 'https://www.notion.so/wiki-extremis/Schweizer-94c988b4e0ea47c7b520d99ff7426f6c',
    description:
      'L???id??al Schweizer est la prosp??rit?? dans la responsabilit??. Chaque Schweizer a un nombre incalculable de devoirs politiques, ??conomiques, civils et militaires. Si il cesse de les remplir il cesse d?????tre Schweizer. Si il les remplit il a droit ?? la paix, la tranquillit?? et la s??curit?? que tous ses coreligionnaires lui assurent.',
  },
  {
    titre: nomCotChats,
    deDeVie: 0,
    voies: [voieMalandrin, voieSaltimbanque, voieEspion],
    affiche: true,
    portrait: portrait_chat,
    modifs_caracs: [
      { carac: nomConstitution, val: -3 },
      { carac: nomDexterite, val: 1 },
      { carac: nomSensibilite, val: 1 },
      { carac: nomCharisme, val: 1 },
    ],
    evts: [
      {
        description: 'Vif sur les toits',
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Griffu',
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Accueilli partout',
        bonusCompetence: nomSIntroduire,
      },
    ],
    modifs_comps: [{ comp: nomAnimaux, val: 1 }],
    fonds: [],
    page: 'https://www.notion.so/wiki-extremis/Coterie-des-chats-d7ba362bee6644399d85bbd2c6e9061e',
    description: 'Pas fait.',
    capacite_magique:
      "peut d??penser un point de magie pour d??tecter tous les dangers dans un rayon de 10 m??tres et jusqu'?? 10 minutes dans le futur.",
  },
  {
    titre: nomCotCelte,
    deDeVie: 1,
    voies: [voieTravailleur, voieAventurier, voieBrute],
    affiche: true,
    portrait: portrait_celte,
    fonds: [],
    evts: [
      {
        description: 'Sorci??re',
        bonusCompetence: nomAlchimie,
      },
      {
        description: 'Magie druidique',
        bonusCompetence: nomArcanes,
      },
      {
        description: 'Artisan cr??atif',
        bonusCompetence: nomArt,
      },
      {
        description: 'Peintures bleues et tatouages',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Pr??tres druides',
        bonusCompetence: nomMiracles,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Celtes-3e78fbeedea949e899c615a7f7f7cdf0',
    description: 'Pas fait.',
  },
  {
    titre: nomCotCathares,
    deDeVie: 1,
    voies: [voieTravailleur, voiePretre],
    affiche: true,
    portrait: portrait_cathare,
    fonds: [],
    evts: [
      {
        description: 'Humilit?? et autosuffisance',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Aura de saint',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Saint',
        bonusCompetence: nomMiracles,
      },
      {
        description: "Choeur de l'??glise",
        bonusCompetence: nomMusique,
      },
      {
        description: 'Insensibilit?? mystique',
        bonusCompetence: nomResistance,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Cathares-5f56f04db3a5463cb274bc8c53054ce2',
    description: 'Pas fait. Christianisme obligatoire.',
  },
  {
    titre: nomCotSaabi,
    deDeVie: 1,
    voies: [voieMarchand, voieHommeDuMonde, voieAventurier, voieMalandrin],
    affiche: true,
    portrait: portrait_saabi,
    fonds: [],
    evts: [
      {
        description: '??leveur de pur sang',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Saint homme',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'Caravanier',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Survivant du d??sert',
        bonusCompetence: nomSurvie,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Saabi-fbbc9c0bf8d94adbb7757963a65b2a92',
    description: 'Pas fait',
  },
  {
    titre: nomCotAcheron,
    deDeVie: 1,
    voies: [voieHommeDuMonde, voieIntellectuel, voieMagicien],
    affiche: true,
    portrait: portrait_acheron,
    fonds: [bg_acheron],
    evts: [
      {
        description: 'Expert en potions',
        bonusCompetence: nomAlchimie,
      },
      {
        description: "Si vieux qu'il sait tout",
        bonusCompetence: nomConvaincre,
      },
      {
        description: "Exp??riences sur le t??l??chargement de l'??me",
        bonusCompetence: nomInformatique,
      },
      {
        description: 'D??formations n??cromantiques',
        bonusCompetence: nomIntimider,
      },
      {
        description: '??tude du corps humain',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Adorateur de la mort',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'Corps ?? moiti?? mort',
        bonusCompetence: nomResistance,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Ach-ron-acdb44a8711640f5a6d9527e5e656d5a',
    description:
      "La coterie d'Ach??ron a un principe d'une terrifiante clart?? : la vie est surfaite. Il est temps que l'humanit?? d??passe ce stade et entre dans la non vie ??ternelle derri??re le bienveillant guide qu'est la magie des t??n??bres. Tout le fonctionnement d'Ach??ron se base sur la magie des t??n??bres. Ils sont probablement la coterie qui a le plus rapproch?? l'utilisation de la magie d'une science fiable. Il faut dire que c'est d'elle que d??pend ce qui leur tient le plus ?? c??ur : l'immortalit??.",
  },
  {
    titre: nomCotConquistadors,
    deDeVie: 1,
    voies: [
      voieAventurier,
      voieSoldat,
      voieSaltimbanque,
      voieVoyageur,
      voieIngenieur,
    ],
    evts: [
      {
        description: "Dresseur de chiens d'attaque",
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Chef de cuadrilla',
        bonusCompetence: nomCommandement,
      },
      {
        description:
          "Sabreur, pro de la machette qui s'est pris ?? aimer s'en servir au combat",
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Marin',
        bonusCompetence: nomPilotage,
      },
    ],
    modifs_comps: [{ comp: nomArcanes, val: 1 }],
    affiche: true,
    portrait: portrait_conquistador,
    fonds: [bg_conquistador, bg_conquistador_b],
    page: 'https://www.notion.so/wiki-extremis/Conquistadors-433a3daa82574550a20fe555a3ad2eb4',
    description:
      "Les conquistadors sont une coterie particuli??rement militaris??e et aventureuse. Ils vivent pour les exp??ditions lointaines, la conqu??te, la piraterie, et la gloire qui va avec. Ils parcourent le monde dans des navires en petites troupes d'??lite tr??s bien ??quip??es et tr??s motiv??es appel??es Cuadrilla. Ils ne reviennent ?? leur base de Saint Malo que charg??s d'or ou apr??s avoir fond?? une colonie prometteuse.\nChoisit entre arcanes de feu ou de barde.",
  },
  {
    titre: nomCotElfes,
    deDeVie: 1,
    voies: [voieSaltimbanque, voieMagicien, voieHommeDuMonde, voieIntellectuel],
    modifs_caracs: [
      { carac: nomConstitution, val: -1 },
      { carac: nomMagie, val: 1 },
      { carac: nomCharisme, val: 1 },
    ],
    modifs_comps: [{ comp: nomAlchimie, val: 1 }],
    evts: [
      {
        description: 'Artiste de cirque elfique',
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Coquet com??dien',
        bonusCompetence: nomActeur,
      },
      {
        description: 'Lanceur de sort',
        bonusCompetence: nomArcanes,
      },
      {
        description: 'Artiste',
        bonusCompetence: nomArt,
      },
      {
        description: 'A travaill?? dans une ??choppe ?? restaurer des objets',
        bonusCompetence: nomArtisanat,
      },
      {
        description: 'Entretien du corps primordial',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Musicien de harpe ou de fl??te',
        bonusCompetence: nomMusique,
      },
    ],
    affiche: true,
    portrait: portrait_elfe,
    fonds: [bg_elfe, bg_elfe_b],
    page: 'https://www.notion.so/wiki-extremis/Elfes-233a158ae654424eaf3f2466f476e13c',
    description:
      "Les elfes  ont pour but principal de faire atteindre son potentiel maximum ?? tout homme qui les rejoindrait. Cette perfection ??tant pour eux essentielle au niveau de la beaut??, de la sensibilit??, de l'agr??ment et de la morale. Ils ont d??velopp?? toute une philosophie et une magie orient??e vers ce but et les ont pouss??es ?? un tel niveau qu'aucun elfe ne reste longtemps laid ou d??sagr??able.",
  },
  {
    titre: nomCotSkavens,
    deDeVie: 0,
    voies: [voieScientifique, voieIngenieur, voieMalandrin, voieEspion],
    modifs_caracs: [],
    modifs_comps: [{ comp: nomDetrousser, val: 1 }],
    affiche: true,
    portrait: portrait_skavens,
    fonds: [bg_skavens],
    evts: [
      {
        description: 'Apprenti Eshin',
        bonusCompetence: nomDiscretion,
      },
      {
        description: "Coureur d'??go??ts",
        bonusCompetence: nomAcrobatie,
      },
      {
        description: 'Empoisonneur',
        bonusCompetence: nomAlchimie,
      },
      {
        description: 'Exp??riences g??n??tico magiques',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Marchand opportuniste',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'L??ch?? en pleine nature et a du survivre',
        bonusCompetence: nomSurvie,
      },
    ],
    page: 'https://www.notion.so/wiki-extremis/Skavens-51d5db3bea614d1abca305011d3d5d95',
    description:
      'Les skavens ont pour principe de base une ??nergie et une ambition d??mesur??e. Toujours plus et en un minimum de temps est leur devise, peu importe les risques ?? prendre.',
  },
  {
    titre: nomCotOrks,
    deDeVie: 3,
    voies: [voieSoldat, voieIngenieur, voieBrute, voieVoyageur],
    modifs_caracs: [
      { carac: nomConstitution, val: 2 },
      { carac: nomIntelligence, val: -1 },
      { carac: nomCharisme, val: -1 },
    ],
    modifs_comps: [{ comp: nomIntimider, val: 1 }],
    evts: [
      {
        description: 'Chef n??',
        bonusCompetence: nomCommandement,
      },
      {
        description: "Champion de concours de coup d'boule",
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Instinct de la fabrication',
        bonusCompetence: nomFabricationTechnique,
      },
      {
        description: 'Surgonfl??',
        bonusCompetence: nomForce,
      },
      {
        description: 'Conducteur de buggy',
        bonusCompetence: nomPilotage,
      },
      {
        description: 'Conducteur de mini h??lico',
        bonusCompetence: nomPilotage,
      },
      {
        description: 'Brikolo',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Increvable',
        bonusCompetence: nomResistance,
      },
      {
        description: '??cosyst??me personnel',
        bonusCompetence: nomSurvie,
      },
    ],
    affiche: true,
    portrait: portrait_ork,
    fonds: [bg_ork, bg_ork_b],
    page: 'https://www.notion.so/wiki-extremis/Orks-c92555dd3ea94318a030d7bb6cfe24ca',
    description:
      'Les orks sont des mutants costauds et bricoleurs qui embrassent avant tout une vie simple et brutale, sans prise de t??te.',
    capacite_magique:
      'Peut d??penser un point de magie pour :\n- si mis hors de combat, faire un test de CON dif 12. Si il est r??ussi le personnage se rel??ve sans s??quelle avec un d?? de vie.\n- force hercul??enne : +1D6 CON pour une heure',
  },
  {
    titre: nomCotTranshumanistes,
    deDeVie: 1,
    voies: [voieScientifique, voieIngenieur, voieMarchand, voieVoyageur],
    evts: [
      {
        description: 'Art conceptuel',
        bonusCompetence: nomArt,
      },
      {
        description: 'Accro au cyberspace',
        bonusCompetence: nomInformatique,
      },
      {
        description: 'Chrom?? ostensiblement',
        bonusCompetence: nomIntimider,
      },
      {
        description: 'Optimiseur fiscal',
        bonusCompetence: nomLoi,
      },
      {
        description: 'Apprentissage de la m??decine ?? implants',
        bonusCompetence: nomMedecine,
      },
      {
        description: 'Investisseur capitaliste',
        bonusCompetence: nomNegoce,
      },
      {
        description: 'Formation scientifique',
        bonusCompetence: nomScience,
      },
      {
        description: 'Investisseur ?? succ??s',
        bonusRichesse: 1,
      },
    ],
    affiche: true,
    niveau_richesse: 1,
    portrait: portrait_transhumaniste,
    fonds: [bg_transhumaniste, bg_transhumaniste_b],
    page: 'https://www.notion.so/wiki-extremis/Transhumanistes-08e0709a67bd486cb594815e5bccdd0d',
    description:
      "Les transhumanistes sont la coterie qui embrasse le plus la technologie moderne surtout dans tout ce qui s'applique ?? la transformation de l'humain. Ils s'obs??dent en particulier pour la cybern??tique et les modifications g??n??tiques et ils sont tr??s loin en avance sur toutes les autres coteries ?? ce sujet. Comme leur but ultime est d'am??liorer l'homme de toutes les mani??res possibles ils ne sont pas avares de leurs inventions et les proposent ?? tous ceux qui les souhaitent. Au juste prix bien s??r car ce sont des commer??ants f??roces. C'est une n??cessit?? car leurs activit??s ont l'??norme d??faut d'??tre d??voreuses d'??nergie, qui est une ressource rare et ch??re sur Extremis.",
  },
  {
    titre: nomCotZaporogues,
    deDeVie: 1,
    voies: [
      voieAventurier,
      voieSaltimbanque,
      voieBrute,
      voieVoyageur,
      voiePretre,
      voieTravailleur,
    ],
    affiche: true,
    evts: [
      {
        description: 'pasteur / ??leveur',
        bonusCompetence: nomAnimaux,
      },
      {
        description: 'Fils de chef de clan',
        bonusCompetence: nomCommandement,
      },
      {
        description: 'Bagarreur ivrogne',
        bonusCompetence: nomCorpsACorps,
      },
      {
        description: 'Pr??tre multireligion',
        bonusCompetence: nomMiracles,
      },
      {
        description: 'R??utilisateur de matos de seconde main',
        bonusCompetence: nomReparer,
      },
      {
        description: 'Vie ?? la dure ?? la belle ??toile',
        bonusCompetence: nomResistance,
      },
      {
        description: "Chasseur ?? l'arc",
        bonusCompetence: nomTir,
      },
      {
        description: 'Sait tout pr??parer avec peu',
        bonusCompetence: nomSurvie,
      },
    ],
    portrait: portrait_zaporogue,
    fonds: [bg_zaporogue, bg_zaporogue_b],
    page: 'https://www.notion.so/wiki-extremis/Zaporogues-a371ec776cdd45eeaa72f6b2db2a0edc',
    description:
      "Les zaporogues aiment avant tout la libert??, les sentiments exacerb??s, et les grands espaces. Les structure rigides et pollu??es des grandes villes les r??vulsent, de m??me que tout ce qui est organis?? en profondeur et tout ce qui est bas?? sur la planification longue dur??e et la r??flexion pure. Ils pr??f??rent agir impulsivement, ob??ir ?? leurs sentiments violents, c'est pour eux ce qui fait la diff??rence entre vrais humains et robots du Consul.",
  },
]
