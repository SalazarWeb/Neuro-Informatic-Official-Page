import type { Member } from '../types';

export const members: Member[] = [
  {
    id: 'member-1',
    name: 'Dr. Example Researcher',
    category: 'lab-member',
    role: {
      es: 'Director del Departamento',
      en: 'Department Director',
    },
    affiliation: {
      department: {
        es: 'Departamento de Neuroinformática',
        en: 'Neuroinformatics Department',
      },
      center: 'Centro de Neurociencias (CNeuro)',
    },
    email: 'director@cneuro.edu',
    phone: '+56 2 1234 5678',
    cv: {
      es: 'Investigador principal con experiencia en neurociencia computacional y análisis de datos neuronales. Más de 10 años de experiencia en el desarrollo de métodos cuantitativos para el estudio del sistema nervioso.',
      en: 'Principal investigator with expertise in computational neuroscience and neural data analysis. Over 10 years of experience developing quantitative methods for studying the nervous system.',
    },
    education: [
      {
        degree: 'PhD in Neuroscience',
        institution: 'Universidad Nacional',
        year: 2015,
      },
      {
        degree: 'MSc in Applied Mathematics',
        institution: 'Universidad Nacional',
        year: 2010,
      },
    ],
    research: {
      es: [
        'Neurociencia computacional',
        'Análisis de señales neuronales',
        'Modelado de redes neuronales',
        'Aprendizaje automático aplicado a neuroimagen',
      ],
      en: [
        'Computational neuroscience',
        'Neural signal analysis',
        'Neural network modeling',
        'Machine learning applied to neuroimaging',
      ],
    },
    publications: [],
    orcid: '0000-0000-0000-0000',
    googleScholar: 'https://scholar.google.com/citations?user=example',
    socialNetworks: {
      twitter: 'https://twitter.com/example',
      github: 'https://github.com/example',
    },
    openSource: [
      {
        name: 'NeuroAnalyzer',
        description: {
          es: 'Biblioteca de Python para análisis de datos EEG y MEG',
          en: 'Python library for EEG and MEG data analysis',
        },
        url: 'https://github.com/example/neuroanalyzer',
      },
    ],
    supervisedStudents: ['student-1'],
  },
  // Agregar más miembros según sea necesario
];
