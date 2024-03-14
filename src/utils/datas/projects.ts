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
    description:
      "MdyTrl, c'est mon portfolio, tout simplement ! Vous y trouverez les différents projets que j'ai pu développer. Au plaisir de travailler prochainement ensemble !",
    images: ['/assets/mdytrl.webp']
  },
  {
    name: 'Kasa',
    type: 'OpenClassRooms',
    stacks: ['React', 'Typescript', 'Sass'],
    description:
      'Kasa est une application web fictive répertoriant des annonces de location réalisée dans le cadre de ma formation.',
    skills_developed: [
      'React Router',
      'Création de composants réutilisables',
      'Utilisation des différents hooks',
      'Gestion des états et des props'
    ],
    images: ['/assets/projects/kasa/kasa_desktop_1.png', '/assets/projects/kasa/kasa2.jpg'],
    repo: 'https://github.com/MandyTrl/Kasa',
    site: 'https://kasa-oc-mt.vercel.app/'
  },
  {
    name: 'Mon vieux grimoire',
    type: 'OpenClassRooms',
    stacks: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
    description:
      "Mon vieux grimoire est un site de notation de livres réalisé dans le cadre de ma formation. Conception d'une API Rest et modélisation de la base de données du site. Le design du site a légèrement été mis à jour également.",
    skills_developed: [
      'Création et gestion de routes, controlleurs et middlewares',
      'Stocker des données de manière sécurisée (token, hashage de mdp..)',
      "Création de schemas et modélisation d'une BDD",
      "Utilisation de l'ORM Mongoose pour traiter les données",
      'Gestion des erreurs'
    ],
    images: [
      '/assets/projects/monvieuxgrimoire/mon_vieux_grimoire1.png',
      '/assets/projects/monvieuxgrimoire/monvieuxgrimoire2.jpg'
    ],
    repo: 'https://github.com/MandyTrl/mdytrl'
  },
  {
    name: 'Sophie Buel',
    type: 'OpenClassRooms',
    stacks: ['JavaScript', 'CSS'],
    description:
      "Gestion du back office d'un portfolio fictif d'une architecte d'intérieur (formulaires, gestion des projets en étant authentifié..). Ce projet a été réalisé pendant ma période de formation Openclassrooms.",
    skills_developed: [
      "Récupérer les données d'un formulaire",
      'Manipuler les éléments du DOM afin d’en faire un contenu dynamique',
      'Gérer les événements de l’utilisateur (click de la souris..)'
    ],
    images: ['/assets/projects/sophiebluel/sophie_bluel_1.png', '/assets/projects/sophiebluel/sophiebluel2.jpg'],
    repo: 'https://github.com/MandyTrl/Portfolio4Architect'
  },
  {
    name: 'Nina Carducci',
    type: 'OpenClassRooms',
    stacks: ['HTML', 'SEO'],
    description:
      "Optimisation du porfolio d'une photographe en utilisant Lighthouse. Application de la réglementation WCAG, maîtrise de la sémantique et amélioration des performances liées aux images tout en fixant un bug.",
    skills_developed: [
      "Optimisation d'un site existant en utilisant des outils comme Lighthouse",
      'Connaître et appliquer la réglementation WCAG',
      'Appliquer une bonne sémantique, Optimisation des imagess.'
    ],
    images: ['/assets/projects/ninacarducci/nina_carducci_1.png', '/assets/projects/ninacarducci/ninacarducci2.jpg'],
    repo: 'https://github.com/MandyTrl/Nina-Carducci-s-Portfolio',
    site: 'https://nina-carducci-s-portfolio-oc.vercel.app/',
    pdf: '/assets/projects/ninacarducci/audit_nina_carducci_after.pdf'
  },
  {
    name: 'Booki',
    type: 'OpenClassRooms',
    stacks: ['HTML', 'CSS'],
    description:
      "Intégration de la page d'accueil vitrine fictif proposant des hébergements et activités dans la ville de son choix. Adapté également sur tablette et smartphone (responsive design).",
    skills_developed: ["Implémenter du contenu conformément à une maquette et l'adapter en responsive"],
    images: ['/assets/projects/booki/booki_desktop_1.png', '/assets/projects/booki/booki2.jpg'],
    repo: 'https://github.com/MandyTrl/Booki',
    site: 'https://booki-tau.vercel.app'
  }
]
