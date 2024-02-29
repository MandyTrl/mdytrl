type SchoolExperiencesType = {
  year: string
  certification: string | string[]
  school: string
}

export type SchoolCVType = {
  section: string
  experiences: SchoolExperiencesType[]
}

export const school: SchoolCVType[] = [
  {
    section: 'Formation',
    experiences: [
      {
        year: '2024',
        certification: 'Titre RNCP de niveau V : Développeuse Web',
        school: 'OpenClassRooms'
      },
      {
        year: '2022',
        certification: "Titre RNCP de niveau VI : Cheffe de Projet de Développement d'Application Web & Mobile",
        school: 'La Capsule'
      },
      {
        year: '2015',
        certification: 'Titre Secrétaire/Assistante Médicale',
        school: 'Avlis'
      },
      {
        year: '2010 & 2011',
        certification: [
          'Licence Géographie, société et aménagement du territoire | 2011',
          "Licence Histoire de l'art et archéologie | 2010"
        ],
        school: 'Université Paris X, Nanterre'
      }
    ]
  }
]

type ProfessionalExperiencesType = {
  year: string
  job: string
  description: string
  company: string
  tasks: string[]
  stacks?: string[]
}

export type ProfessionalCVType = {
  section: string
  experiences: ProfessionalExperiencesType[]
}

export const professional: ProfessionalCVType[] = [
  {
    section: 'Parcours professionnel',
    experiences: [
      {
        year: "Dec. 2022 -> aujourd'hui",
        job: 'Développeuse fullstack',
        company: 'Free',
        description: 'Développement et maintien des projets de communication internes et externes de la société',
        tasks: [
          'Rendre les projets contribuables via Strapi, React et Next (ex: iliad.fr)',
          'Participation à la refonte de projets (ex: portail.free.fr)',
          "Aide à la conception d'un email builder",
          'Initilisation de nouveaux projets',
          'Mise en place de tests unitaires',
          "Participation à la refonte du site Free Transfert, un service d'envoi et de partage de fichiers 📂"
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
        year: 'Avril 2018 -> Mai 2022',
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
        year: 'Mai 2014 -> Avril 20216',
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
  }
]
