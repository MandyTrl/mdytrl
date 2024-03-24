export type SchoolExperiencesType = {
  year: string
  certification: string | string[]
  school: string
}

export const school: SchoolExperiencesType[] = [
  {
    year: '2024',
    certification: 'Titre RNCP de niveau V : Développeuse Web',
    school: 'OpenClassRooms'
  },
  {
    year: '2022',
    certification: "Titre RNCP de niveau VI : Cheffe de Projet de Développement d'Application Web & Mobile",
    school: 'La Capsule'
  }
  // {
  //   year: '2015',
  //   certification: 'Titre RNCP de niveau IV : Secrétaire - Assistante Médicale',
  //   school: 'Avlis'
  // },
  // {
  //   year: '2010 - 2011',
  //   certification: ['Licence Géographie, société et aménagement du territoire'],
  //   school: 'Université Paris X, Nanterre'
  // },
  // {
  //   year: '2009 - 2010',
  //   certification: ["Licence Histoire de l'art et archéologie"],
  //   school: 'Université Paris X, Nanterre'
  // }
]

export type ProfessionalExperiencesType = {
  year: string
  job: string
  description: string
  company: string
  tasks: string[]
  stacks?: string[]
}

export type ExperienceType = SchoolExperiencesType | ProfessionalExperiencesType

export const professional: ProfessionalExperiencesType[] = [
  {
    year: '2022 - 2024',
    job: 'Développeuse fullstack',
    company: 'Free',
    description: 'Développement et maintien des projets de communication internes et externes de la société',
    tasks: [
      'Rendre les projets contribuables via Strapi, React et Next (ex: https://www.iliad.fr/ )',
      'Participation à la refonte de projets (ex: portail.free.fr)',
      "Aide à la conception d'un email builder (front end et back end) et de la création de sa base de données",
      'Initilisation de nouveaux projets',
      'Développement de nouvelles fonctionnalités',
      'Mise en place de tests unitaires',
      'Participation à la refonte de projets (ex: https://portail.free.fr/, https://transfert.free.fr/ )'
    ],
    stacks: [
      'React',
      'Méthode Agile',
      'Gitlab',
      'TypeScript',
      'Tailwind',
      'NextJS',
      'NestJS',
      'Strapi',
      'Docker',
      'PGAdmin',
      'ElasticSearch'
    ]
  },
  {
    year: '2018 - 2022',
    job: 'Quality Specialist & KYC Ambassador',
    company: 'Just Eat Takeaway',
    description:
      "Suivi et contrôle qualité auprès de 4 prestataires externalisés dans le but de développer le service fourni aux restaurateurs ainsi qu'aux clients.",
    tasks: [
      'Audits et contrôle des process',
      'Élaboration de formulaires',
      'Amélioration et création des process et de la documentation',
      'Suivi et analyse des différents KPI liés à la qualité BPO et au service client/restaurant',
      'Réalisation de sessions de feedbacks et de formation'
    ]
  },
  {
    year: '2014 - 2016',
    job: 'Secrétaire Médicale',
    company: 'SCM Groupe de Spécialistes Médicaux',
    description:
      'Gestion, organisation et priorisation des imprévus/urgences en fonction des spécialités-métiers (14 agendas)',
    tasks: [
      'Création, suivi des dossiers et archivage',
      'Stérilisation des outils médicaux',
      'Pose et retrait de holter cardiaque'
    ]
  }
]
