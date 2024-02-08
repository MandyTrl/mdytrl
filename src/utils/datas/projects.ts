type ProjectType = {
  name: string
  type: string
  stacks: string[]
  description: string
  skills_developed?: string[]
  images: string[]
  repo?: string
  site?: string
  pdf?: string
}
export const projects: ProjectType[] = [
  {
    name: 'mdytrl',
    type: 'Perso',
    stacks: ['NextJS', 'Typescript', 'Tailwind'],
    description: "Portfolio regroupant les différents projets que j'ai pu développer",
    images: ['/assets/mdytrl.webp']
  },
  {
    name: 'Kasa',
    type: 'OpenClassRooms',
    stacks: ['React', 'Typescript', 'Sass'],
    description: 'Application web répertoriant des annonces immobilières',
    skills_developed: [
      'React Router',
      'Création de composants réutilisables',
      'Utilisation des différents hooks',
      'Gestion des états et des props'
    ],
    images: [
      '/assets/projects/kasa/kasa_desktop_1.png',
      '/assets/projects/kasa/kasa_desktop_2.png',
      '/assets/projects/kasa/kasa_desktop_3.png'
    ],
    repo: 'https://github.com/MandyTrl/Kasa',
    site: 'https://kasa-oc-mt.vercel.app/'
  },
  {
    name: 'Mon vieux grimoire',
    type: 'OpenClassRooms',
    stacks: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
    description: "Création d'une API Rest pour un site de notation de livres",
    skills_developed: [
      'Création et gestion de routes, controlleurs et middlewares',
      'Stocker des données de manière sécurisée (token, hashage de mdp..)',
      "Création de schemas et modélisation d'une BDD",
      "Utilisation de l'ORM Mongoose pour traiter les données",
      'Gestion des erreurs'
    ],
    images: ['/assets/mdytrl.webp'],
    repo: 'https://github.com/MandyTrl/mdytrl'
  },
  {
    name: 'Sophie Buel',
    type: 'OpenClassRooms',
    stacks: ['JavaScript', 'CSS'],
    description: "Portfolio d'une architecte d'intérieur",
    skills_developed: [
      "Récupérer les données d'un formulaire",
      'Manipuler les éléments du DOM afin d’en faire un contenu dynamique',
      'Gérer les événements de l’utilisateur (click de la souris..)'
    ],
    images: ['/assets/projects/sophiebluel/sophie_bluel_1.png', '/assets/projects/sophiebluel/sophie_bluel_4.png'],
    repo: 'https://github.com/MandyTrl/Portfolio4Architect'
  },
  {
    name: 'Nina Carducci',
    type: 'OpenClassRooms',
    stacks: ['HTML', 'SEO'],
    description: "Porfolio d'une photographe",
    skills_developed: [
      "Optimisation d'un site existant en utilisant des outils comme Lighthouse",
      'Connaître et appliquer la réglementation WCAG',
      'Appliquer une bonne sémantique, Optimisation des imagess.'
    ],
    images: ['/assets/projects/ninacarducci/nina_carducci_1.png'],
    repo: 'https://github.com/MandyTrl/Nina-Carducci-s-Portfolio',
    site: 'https://nina-carducci-s-portfolio-oc.vercel.app/',
    pdf: '/assets/projects/ninacarducci/audit_nina_carducci_after.pdf'
  },
  {
    name: 'Booki',
    type: 'OpenClassRooms',
    stacks: ['HTML', 'CSS'],
    description: 'Site vitrine proposant des hébergements et activités dans la ville de son choix',
    skills_developed: ["Implémenter du contenu conformément à une maquette et l'adapter en responsive"],
    images: ['/assets/projects/booki/booki_desktop_1.png'],
    repo: 'https://github.com/MandyTrl/Booki',
    site: 'https://booki-tau.vercel.app'
  }
]
