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

import { nomDexterite } from './lstCaracs'
import { nomConstitution } from './lstCaracs'
import { nomCharisme } from './lstCaracs'
import { nomIntelligence } from './lstCaracs'
import { nomSensibilite } from './lstCaracs'
import { nomMagie } from './lstCaracs'

import { nomAlchimie, nomAnimaux, nomArcanes, nomIntimider } from './lstComps'

import {
  voieIngenieur,
  voieMagicien,
  voieSoldat,
  voieVoyageur,
} from './lstVoies'
import { voieIntellectuel } from './lstVoies'
import { voieHommeDuMonde } from './lstVoies'
import { voieAventurier } from './lstVoies'
import { voieMalandrin } from './lstVoies'
import { voieMarchand } from './lstVoies'
import { voieTravailleur } from './lstVoies'
import { voiePretre } from './lstVoies'
import { voieBrute } from './lstVoies'
import { voieSaltimbanque } from './lstVoies'
import { voieEspion } from './lstVoies'

export const nomCotConquistadors = 'Conquistadors'
export const nomCotElfes = 'Elfes'
export const nomCotOrks = 'Orks'
export const nomCotZaporogues = 'Zaporogues'
export const nomCotTranshumanistes = 'Transhumanistes'
export const nomCotTempliers = 'Templiers'
export const nomCotAcheron = 'Achéron'
export const nomCotSaabi = 'Saabi'
export const nomCotCathares = 'Cathares'
export const nomCotCelte = 'Celtes'
export const nomCotChats = 'Chats'

export const lstCoteries = [
  {
    titre: nomCotChats,
    voies: [voieMalandrin, voieSaltimbanque, voieEspion],
    affiche: true,
    portrait: portrait_chat,
    modifs_caracs: [
      { carac: nomConstitution, val: -3 },
      { carac: nomDexterite, val: 1 },
      { carac: nomSensibilite, val: 1 },
      { carac: nomCharisme, val: 1 },
    ],
    modifs_comps: [{ comp: nomAnimaux, val: 1 }],
    fonds: [],
    page: 'https://www.notion.so/wiki-extremis/Coterie-des-chats-d7ba362bee6644399d85bbd2c6e9061e',
    description: 'Pas fait.',
    capacite_magique:
      "peut dépenser un point de magie pour détecter tous les dangers dans un rayon de 10 mètres et jusqu'à 10 minutes dans le futur.",
  },
  {
    titre: nomCotCelte,
    voies: [voieTravailleur, voieAventurier, voieBrute],
    affiche: false,
    portrait: portrait_celte,
    fonds: [],
    page: 'https://www.notion.so/wiki-extremis/Celtes-3e78fbeedea949e899c615a7f7f7cdf0',
    description: 'Pas fait.',
  },
  {
    titre: nomCotCathares,
    voies: [voieTravailleur, voiePretre],
    affiche: false,
    portrait: portrait_cathare,
    fonds: [],
    page: 'https://www.notion.so/wiki-extremis/Cathares-5f56f04db3a5463cb274bc8c53054ce2',
    description: 'Pas fait. Christianisme obligatoire.',
  },
  {
    titre: nomCotSaabi,
    voies: [voieMarchand, voieHommeDuMonde, voieAventurier, voieMalandrin],
    affiche: false,
    portrait: portrait_saabi,
    fonds: [],
    page: 'https://www.notion.so/wiki-extremis/Saabi-fbbc9c0bf8d94adbb7757963a65b2a92',
    description: 'Pas fait',
  },
  {
    titre: nomCotAcheron,
    voies: [voieHommeDuMonde, voieIntellectuel, voieMagicien],
    affiche: true,
    portrait: portrait_acheron,
    fonds: [bg_acheron],
    page: 'https://www.notion.so/wiki-extremis/Ach-ron-acdb44a8711640f5a6d9527e5e656d5a',
    description:
      "La coterie d'Achéron a un principe d'une terrifiante clarté : la vie est surfaite. Il est temps que l'humanité dépasse ce stade et entre dans la non vie éternelle derrière le bienveillant guide qu'est la magie des ténèbres. Tout le fonctionnement d'Achéron se base sur la magie des ténèbres. Ils sont probablement la coterie qui a le plus rapproché l'utilisation de la magie d'une science fiable. Il faut dire que c'est d'elle que dépend ce qui leur tient le plus à cœur : l'immortalité.",
  },
  {
    titre: nomCotConquistadors,
    voies: [
      voieAventurier,
      voieSoldat,
      voieSaltimbanque,
      voieVoyageur,
      voieIngenieur,
    ],
    modifs_comps: [{ comp: nomArcanes, val: 1 }],
    affiche: true,
    portrait: portrait_conquistador,
    fonds: [bg_conquistador, bg_conquistador_b],
    page: 'https://www.notion.so/wiki-extremis/Conquistadors-433a3daa82574550a20fe555a3ad2eb4',
    description:
      "Les conquistadors sont une coterie particulièrement militarisée et aventureuse. Ils vivent pour les expéditions lointaines, la conquête, la piraterie, et la gloire qui va avec. Ils parcourent le monde dans des navires en petites troupes d'élite très bien équipées et très motivées appelées Cuadrilla. Ils ne reviennent à leur base de Saint Malo que chargés d'or ou après avoir fondé une colonie prometteuse.\nChoisit entre arcanes de feu ou de barde.",
  },
  {
    titre: nomCotElfes,
    voies: [voieSaltimbanque, voieMagicien, voieHommeDuMonde, voieIntellectuel],
    modifs_caracs: [
      { carac: nomConstitution, val: -1 },
      { carac: nomMagie, val: 1 },
      { carac: nomCharisme, val: 1 },
    ],
    modifs_comps: [{ comp: nomAlchimie, val: 1 }],
    affiche: true,
    portrait: portrait_elfe,
    fonds: [bg_elfe, bg_elfe_b],
    page: 'https://www.notion.so/wiki-extremis/Elfes-233a158ae654424eaf3f2466f476e13c',
    description:
      "Les elfes  ont pour but principal de faire atteindre son potentiel maximum à tout homme qui les rejoindrait. Cette perfection étant pour eux essentielle au niveau de la beauté, de la sensibilité, de l'agrément et de la morale. Ils ont développé toute une philosophie et une magie orientée vers ce but et les ont poussées à un tel niveau qu'aucun elfe ne reste longtemps laid ou désagréable.",
  },
  {
    titre: nomCotOrks,
    voies: [voieSoldat, voieIngenieur, voieBrute, voieVoyageur],
    modifs_caracs: [
      { carac: nomConstitution, val: 2 },
      { carac: nomIntelligence, val: -1 },
      { carac: nomCharisme, val: -1 },
    ],
    modifs_comps: [{ comp: nomIntimider, val: 1 }],
    affiche: true,
    portrait: portrait_ork,
    fonds: [bg_ork, bg_ork_b],
    page: 'https://www.notion.so/wiki-extremis/Orks-c92555dd3ea94318a030d7bb6cfe24ca',
    description:
      'Les orks sont des mutants costauds et bricoleurs qui embrassent avant tout une vie simple et brutale, sans prise de tête.',
    capacite_magique:
      'Peut dépenser un point de magie pour :\n- si mis hors de combat, faire un test de CON dif 12. Si il est réussi le personnage se relève sans séquelle avec un dé de vie.\n- force herculéenne : +1D6 CON pour une heure',
  },
  {
    titre: nomCotTempliers,
    voies: [],
    affiche: true,
    portrait: portrait_templier,
    fonds: [bg_templier, bg_templier_b, bg_templier_c],
    page: 'https://www.notion.so/wiki-extremis/Templiers-c00f7ed56be2424f9a0baf1797328dfb',
    description:
      "Basée sur la foi inébranlable en Dieu et sur l'honneur guerrier de l'aristocratie franque. Les templiers sont avant tout des guerriers saints qui suivent un code de l'honneur très strict.",
  },
  {
    titre: nomCotTranshumanistes,
    voies: [],
    affiche: true,
    portrait: portrait_transhumaniste,
    fonds: [bg_transhumaniste, bg_transhumaniste_b],
    page: 'https://www.notion.so/wiki-extremis/Transhumanistes-08e0709a67bd486cb594815e5bccdd0d',
    description:
      "Les transhumanistes sont la coterie qui embrasse le plus la technologie moderne surtout dans tout ce qui s'applique à la transformation de l'humain. Ils s'obsèdent en particulier pour la cybernétique et les modifications génétiques et ils sont très loin en avance sur toutes les autres coteries à ce sujet. Comme leur but ultime est d'améliorer l'homme de toutes les manières possibles ils ne sont pas avares de leurs inventions et les proposent à tous ceux qui les souhaitent. Au juste prix bien sûr car ce sont des commerçants féroces. C'est une nécessité car leurs activités ont l'énorme défaut d'être dévoreuses d'énergie, qui est une ressource rare et chère sur Extremis.",
  },
  {
    titre: nomCotZaporogues,
    voies: [],
    affiche: true,
    portrait: portrait_zaporogue,
    fonds: [bg_zaporogue, bg_zaporogue_b],
    page: 'https://www.notion.so/wiki-extremis/Zaporogues-a371ec776cdd45eeaa72f6b2db2a0edc',
    description:
      "Les zaporogues aiment avant tout la liberté, les sentiments exacerbés, et les grands espaces. Les structure rigides et polluées des grandes villes les révulsent, de même que tout ce qui est organisé en profondeur et tout ce qui est basé sur la planification longue durée et la réflexion pure. Ils préfèrent agir impulsivement, obéir à leurs sentiments violents, c'est pour eux ce qui fait la différence entre vrais humains et robots du Consul.",
  },
]
