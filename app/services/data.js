import Service from '@ember/service';

export default class DataService extends Service {

  getGenres() {
    return [
      // {
      //   "px": 6336,
      //   "py": 1203,
      //   "width": 74,
      //   "height": 77,
      //   "id": "map-overlay__massachusetts",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      {
        id: 'right-arrow-overlay',
        x: 0.8425,
        y: 0.1720,
        placement: 'RIGHT',
        checkResize: false
      }

      // {
      //   "px": 0,
      //   "py": 80,
      //   "width": 40,
      //   "height": 40,
      //   "title": "garage_rock",
      //   "id": "map-overlay__garagerock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 370,
      //   "py": 430,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__bluesrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 260,
      //   "py": 600,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__psychedelicrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 564,
      //   "py": 490,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__hardrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 549,
      //   "py": 866,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__shockrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 820,
      //   "py": 650,
      //   "width": 207,
      //   "height": 153,
      //   "id": "map-overlay__heavymetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 1120,
      //   "py": 933,
      //   "width": 80,
      //   "height": 80,
      //   "id": "map-overlay__progressivemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 1361,
      //   "py": 673,
      //   "width": 50,
      //   "height": 53,
      //   "id": "map-overlay__punkrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 1348,
      //   "py": 904,
      //   "width": 84,
      //   "height": 77,
      //   "id": "map-overlay__nwobhm",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 770,
      //   "py": 1665,
      //   "width": 80,
      //   "height": 82,
      //   "id": "map-overlay__glammetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1248,
      //   "py": 1565,
      //   "width": 149,
      //   "height": 116,
      //   "id": "map-overlay__doommetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 1221,
      //   "py": 2149,
      //   "width": 47,
      //   "height": 52,
      //   "id": "map-overlay__gothicrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 1541,
      //   "py": 2084,
      //   "width": 70,
      //   "height": 74,
      //   "id": "map-overlay__rapmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 1314,
      //   "py": 2667,
      //   "width": 79,
      //   "height": 72,
      //   "id": "map-overlay__visualkei",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1947,
      //   "py": 2135,
      //   "width": 54,
      //   "height": 60,
      //   "id": "map-overlay__grunge",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 2150,
      //   "py": 2108,
      //   "width": 66,
      //   "height": 76,
      //   "id": "map-overlay__sludgemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2110,
      //   "py": 2633,
      //   "width": 76,
      //   "height": 73,
      //   "id": "map-overlay__groovemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2158,
      //   "py": 2980,
      //   "width": 68,
      //   "height": 72,
      //   "id": "map-overlay__gothmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2542,
      //   "py": 2887,
      //   "width": 73,
      //   "height": 76,
      //   "id": "map-overlay__neuedeutscheharte",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2647,
      //   "py": 2657,
      //   "width": 72,
      //   "height": 74,
      //   "id": "map-overlay__numetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2591,
      //   "py": 2450,
      //   "width": 75,
      //   "height": 82,
      //   "id": "map-overlay__alternativemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3091,
      //   "py": 2543,
      //   "width": 49,
      //   "height": 52,
      //   "id": "map-overlay__postrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 3194,
      //   "py": 2904,
      //   "width": 71,
      //   "height": 77,
      //   "id": "map-overlay__nwoahm",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3320,
      //   "py": 2766,
      //   "width": 67,
      //   "height": 73,
      //   "id": "map-overlay__postmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2078,
      //   "py": 717,
      //   "width": 55,
      //   "height": 55,
      //   "id": "map-overlay__hardcorepunk",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 1711,
      //   "py": 1091,
      //   "width": 153,
      //   "height": 116,
      //   "id": "map-overlay__speedmetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1696,
      //   "py": 1395,
      //   "width": 76,
      //   "height": 86,
      //   "id": "map-overlay__neoclassicalmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2008,
      //   "py": 1211,
      //   "width": 81,
      //   "height": 79,
      //   "id": "map-overlay__uspm",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1879,
      //   "py": 1602,
      //   "width": 81,
      //   "height": 79,
      //   "id": "map-overlay__avantgardemetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 2181,
      //   "py": 1481,
      //   "width": 153,
      //   "height": 121,
      //   "id": "map-overlay__melodicpowermetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2538,
      //   "py": 1197,
      //   "width": 144,
      //   "height": 112,
      //   "id": "map-overlay__thrashmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2585,
      //   "py": 2159,
      //   "width": 69,
      //   "height": 73,
      //   "id": "map-overlay__stonermetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3049,
      //   "py": 2257,
      //   "width": 64,
      //   "height": 61,
      //   "id": "map-overlay__deathdoom",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 2874,
      //   "py": 1868,
      //   "width": 147,
      //   "height": 119,
      //   "id": "map-overlay__folkmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2524,
      //   "py": 710,
      //   "width": 154,
      //   "height": 118,
      //   "id": "map-overlay__firstblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2810,
      //   "py": 1623,
      //   "width": 78,
      //   "height": 78,
      //   "id": "map-overlay__industrialmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2739,
      //   "py": 977,
      //   "width": 46,
      //   "height": 48,
      //   "id": "map-overlay__crustpunk",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 3262,
      //   "py": 563,
      //   "width": 53,
      //   "height": 54,
      //   "id": "map-overlay__darkambient",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 3103,
      //   "py": 696,
      //   "width": 72,
      //   "height": 81,
      //   "id": "map-overlay__vikingmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2959,
      //   "py": 1136,
      //   "width": 74,
      //   "height": 75,
      //   "id": "map-overlay__grindcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3159,
      //   "py": 1257,
      //   "width": 139,
      //   "height": 116,
      //   "id": "map-overlay__deathmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 3327,
      //   "py": 1173,
      //   "width": 69,
      //   "height": 75,
      //   "id": "map-overlay__deathgrind",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3445,
      //   "py": 917,
      //   "width": 79,
      //   "height": 72,
      //   "id": "map-overlay__norwegianblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3488,
      //   "py": 1049,
      //   "width": 77,
      //   "height": 80,
      //   "id": "map-overlay__symphonicblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3712,
      //   "py": 600,
      //   "width": 74,
      //   "height": 85,
      //   "id": "map-overlay__blackambient",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3806,
      //   "py": 710,
      //   "width": 63,
      //   "height": 58,
      //   "id": "map-overlay__usblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3844,
      //   "py": 776,
      //   "width": 59,
      //   "height": 55,
      //   "id": "map-overlay__canadianblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3889,
      //   "py": 834,
      //   "width": 60,
      //   "height": 56,
      //   "id": "map-overlay__greekblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3889,
      //   "py": 1126,
      //   "width": 82,
      //   "height": 79,
      //   "id": "map-overlay__depressiveblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3610,
      //   "py": 1234,
      //   "width": 81,
      //   "height": 79,
      //   "id": "map-overlay__blackeneddeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3559,
      //   "py": 1396,
      //   "width": 76,
      //   "height": 68,
      //   "id": "map-overlay__brutaldeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3303,
      //   "py": 1461,
      //   "width": 76,
      //   "height": 69,
      //   "id": "map-overlay__swedishdeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3218,
      //   "py": 1514,
      //   "width": 73,
      //   "height": 66,
      //   "id": "map-overlay__southamericandeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3139,
      //   "py": 1627,
      //   "width": 70,
      //   "height": 63,
      //   "id": "map-overlay__deathrash",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3129,
      //   "py": 1719,
      //   "width": 72,
      //   "height": 76,
      //   "id": "map-overlay__crossoverthrash",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4507,
      //   "py": 1026,
      //   "width": 67,
      //   "height": 71,
      //   "id": "map-overlay__unblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4042,
      //   "py": 1396,
      //   "width": 80,
      //   "height": 71,
      //   "id": "map-overlay__techdeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 4084,
      //   "py": 1620,
      //   "width": 77,
      //   "height": 73,
      //   "id": "map-overlay__melodicdeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 6336,
      //   "py": 1103,
      //   "width": 74,
      //   "height": 77,
      //   "id": "map-overlay__blackenedcrust",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3549,
      //   "py": 1696,
      //   "width": 67,
      //   "height": 71,
      //   "id": "map-overlay__metalcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3749,
      //   "py": 1653,
      //   "width": 68,
      //   "height": 72,
      //   "id": "map-overlay__deathnroll",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3965,
      //   "py": 1886,
      //   "width": 77,
      //   "height": 72,
      //   "id": "map-overlay__mathcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4263,
      //   "py": 1923,
      //   "width": 72,
      //   "height": 74,
      //   "id": "map-overlay__deathcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4697,
      //   "py": 1467,
      //   "width": 74,
      //   "height": 79,
      //   "id": "map-overlay__djent",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 4572,
      //   "py": 1785,
      //   "width": 73,
      //   "height": 81,
      //   "id": "map-overlay__trancemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3236,
      //   "py": 1864,
      //   "width": 61,
      //   "height": 65,
      //   "id": "map-overlay__orientalmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3194,
      //   "py": 1932,
      //   "width": 61,
      //   "height": 63,
      //   "id": "map-overlay__celticmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3163,
      //   "py": 2001,
      //   "width": 57,
      //   "height": 59,
      //   "id": "map-overlay__medievalmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3572,
      //   "py": 2081,
      //   "width": 71,
      //   "height": 74,
      //   "id": "map-overlay__symphonicmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3656,
      //   "py": 2266,
      //   "width": 67,
      //   "height": 63,
      //   "id": "map-overlay__dronemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3674,
      //   "py": 2388,
      //   "width": 66,
      //   "height": 64,
      //   "id": "map-overlay__funeraldoom",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // }
    ]
  }
}
