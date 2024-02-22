export type artInspirationType = {
  artwork: string
  artist: string
  year: string
  img: string
}

export type bookInspirationType = {
  title: string
  author: string
  published: string
  img: string
}

export type musicInspirationType = {
  title: string
  artist: string
  img: string
}

export type stuffInspirationType = {
  title: string
  description: string
  link: string
  img: string
}

export type inspirationType = {
  art: artInspirationType[]
  book: bookInspirationType[]
  music: musicInspirationType[]
  stuff: stuffInspirationType[]
}

export const inspiration: inspirationType = {
  art: [
    {
      artwork: 'Montmarte après-midi sous la pluie',
      artist: 'Camille Pissaro',
      year: '- 1987',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      artwork: 'After bathing',
      artist: 'Joaquin Sorolla',
      year: '- 1915',
      img: '/assets/inspirations/art/after_bathing_joaquin_sorolla_bastida_1915.png'
    },
    {
      artwork: 'As sleep in the woods',
      artist: 'Jule Breton',
      year: '- 1877',
      img: '/assets/inspirations/art/asleep_in_the_woods_1877_jules_breton.jpg'
    },
    ,
    {
      artwork: 'Paysage de Cagnes',
      artist: 'Pierre Auguste Renoir',
      year: '- 1908',
      img: '/assets/inspirations/art/pierre_auguste_renoir_paysage_de_Cagnes_1908.jpeg'
    },
    {
      artwork: 'Arcade',
      artist: 'Pahieme',
      year: '',
      img: '/assets/inspirations/art/arcade_pahieme.webp'
    },
    {
      artwork: 'Dancing couple',
      artist: 'Elliot Erwitt',
      year: '- 1952',
      img: '/assets/inspirations/art/elliott_erwitt_valencia_dancing_couple_1952.jpeg'
    },
    {
      artwork: 'Waves',
      artist: 'Elliot Erwitt',
      year: '- 1966',
      img: '/assets/inspirations/art/elliot_erwitt_waves_brighton_1966.jpeg'
    }
    //   {
    //     artwork: 'Thirs Avenue NY city',
    //     artist: 'Elliot Erwitt',
    //     year: '- 1954',
    //     img: '/assets/inspirations/art/elliott_erwitt_thirs_avenue_NYcity_1954.webp'
    //   },
    //   {
    //     artwork: 'Rue Halevy, vue du 6èm étage',
    //     artist: 'Gustave Caillebotte',
    //     year: '- 1878',
    //     img: '/assets/inspirations/art/rue_Halevy_seen_from_the_sixth_floor_1878_Gustave_Caillebotte.png'
  ],
  book: [
    {
      title: 'Montmarte après-midi sous la pluie',
      author: 'Camille Pissaro',
      published: '- 1987',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      author: 'Camille Pissaro',
      published: '- 1987',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      author: 'Camille Pissaro',
      published: '- 1987',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      author: 'Camille Pissaro',
      published: '- 1987',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      author: 'Camille Pissaro',
      published: '- 1987',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    }
  ],
  music: [
    {
      title: 'Montmarte après-midi sous la pluie',
      artist: 'Camille Pissaro',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      artist: 'Camille Pissaro',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      artist: 'Camille Pissaro',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      artist: 'Camille Pissaro',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      artist: 'Camille Pissaro',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    }
  ],

  stuff: [
    {
      title: 'Montmarte après-midi sous la pluie',
      description: 'Ceci est une description pour la plateforme de test',
      link: 'www.test.fr',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      description: 'Ceci est une description pour la plateforme de test',
      link: 'www.test.fr',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      description: 'Ceci est une description pour la plateforme de test',
      link: 'www.test.fr',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      description: 'Ceci est une description pour la plateforme de test',
      link: 'www.test.fr',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    },
    {
      title: 'Montmarte après-midi sous la pluie',
      description: 'Ceci est une description pour la plateforme de test',
      link: 'www.test.fr',
      img: '/assets/inspirations/art/1897_boulevard_montmartre_après_midi_sous_la_pluie_camille_pissarro_1897.jpeg'
    }
  ]
}
