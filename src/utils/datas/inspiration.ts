export enum inspirationEnum {
  ART = 'art',
  BOOK = 'book',
  STUFF = 'stuff'
}
export type inspirationType = {
  type: inspirationEnum
  title: string
  owner?: string
  link?: string
  description?: string
  year?: string
  img?: string
}

export const inspiration: inspirationType[] = [
  {
    title: 'Google Arts & Culture',
    description:
      "Explorez du contenu provenant de plus de 2 000 musées et archives qui se sont associés à l'Institut culturel de Google pour présenter le patrimoine mondial de l'art et de la culture.",
    type: inspirationEnum.STUFF,
    link: 'https://artsandculture.google.com/',
    img: '/assets/inspirations/stuff/google_art_logo.webp'
  },
  {
    title: 'Designer Daily Report',
    description: "Extension Google Chrome - Propose un concentré de ressources et d'inspirations liées au design",
    type: inspirationEnum.STUFF,
    link: 'https://designerdailyreport.com/',
    img: '/assets/inspirations/stuff/designer_daily_report_logo.png'
  },
  {
    title: 'Mapstr',
    description: 'Application - Permet de gérer vos adresses favorites 🍽️',
    type: inspirationEnum.STUFF,
    link: 'https://mapstr.com/',
    img: '/assets/inspirations/stuff/mapstr_logo.png'
  },
  {
    title: 'Notion',
    description: 'Espace de travail individuel et collabortaif pour vos notes',
    type: inspirationEnum.STUFF,
    link: 'https://www.notion.so/fr-fr',
    img: '/assets/stacks/notion.svg'
  },
  {
    title: 'Spotify',
    description: 'Pour écouter mes musiques et podcats préférés',
    type: inspirationEnum.STUFF,
    link: 'www.test.fr',
    img: '/assets/stacks/spotify.svg'
  },

  {
    title: 'Gunnm',
    owner: 'Yukito Kishiro',
    type: inspirationEnum.BOOK,
    year: '- 1990',
    img: '/assets/inspirations/book/Gunnm_yukito_kishiro_tome_1.jpg'
  },
  {
    title: 'The Marshmallow Test',
    owner: 'Walter Misshel',
    type: inspirationEnum.BOOK,
    year: '- 2015',
    img: '/assets/inspirations/book/marshmallow_test_walter_mischel_2015.jpg'
  },
  {
    title: 'Mme Bovary',
    owner: 'Gustave Flaubert',
    type: inspirationEnum.BOOK,
    year: '- 1857',
    img: '/assets/inspirations/book/mme_bovary_gustave_flaubert_1857.jpeg'
  },
  {
    title: 'La Perle et la Coquille',
    owner: 'Nadia Hashimi',
    type: inspirationEnum.BOOK,
    year: '- 2015',
    img: '/assets/inspirations/book/la_perle_et_la_coquille_nadia_hashimi_2015.jpg'
  },
  {
    title: 'Sapiens',
    owner: 'Yuval Noah Harari',
    type: inspirationEnum.BOOK,
    year: '- 2015',
    img: '/assets/inspirations/book/sapiens_yuval_noah_harari_2015.jpg'
  },

  {
    title: 'Dancing couple',
    owner: 'Elliot Erwitt',
    type: inspirationEnum.ART,
    year: '- 1952',
    img: '/assets/inspirations/art/elliott_erwitt_valencia_dancing_couple_1952.jpeg'
  },
  {
    title: 'After bathing',
    owner: 'Joaquin Sorolla',
    type: inspirationEnum.ART,
    year: '- 1915',
    img: '/assets/inspirations/art/after_bathing_joaquin_sorolla_bastida_1915.png'
  },
  {
    title: 'Arcade',
    owner: 'Pahieme',
    type: inspirationEnum.ART,
    img: '/assets/inspirations/art/arcade_pahieme.webp'
  },
  {
    title: 'Waves',
    owner: 'Elliot Erwitt',
    type: inspirationEnum.ART,
    year: '- 1966',
    img: '/assets/inspirations/art/elliot_erwitt_waves_brighton_1966.jpeg'
  },
  {
    title: 'As sleep in the woods',
    owner: 'Jule Breton',
    type: inspirationEnum.ART,
    year: '- 1877',
    img: '/assets/inspirations/art/asleep_in_the_woods_1877_jules_breton.jpg'
  },
  {
    title: 'Paysage de Cagnes',
    owner: 'Pierre Auguste Renoir',
    type: inspirationEnum.ART,
    year: '- 1908',
    img: '/assets/inspirations/art/pierre_auguste_renoir_paysage_de_Cagnes_1908.jpeg'
  }
]
