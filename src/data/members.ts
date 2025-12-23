import type { Member } from '../types';

export const members: Member[] = [
  {
    id: 'member-1',
    name: 'Dr. Example Researcher',
    role: {
      es: 'Director del Departamento',
      en: 'Department Director',
    },
    email: 'director@cneuro.edu',
    bio: {
      es: 'Investigador principal con experiencia en neurociencia computacional y análisis de datos neuronales.',
      en: 'Principal investigator with expertise in computational neuroscience and neural data analysis.',
    },
    education: [
      {
        degree: 'PhD in Neuroscience',
        institution: 'Universidad Nacional',
        year: 2015,
      },
    ],
    research: {
      es: [
        'Neurociencia computacional',
        'Análisis de señales neuronales',
        'Modelado de redes neuronales',
      ],
      en: [
        'Computational neuroscience',
        'Neural signal analysis',
        'Neural network modeling',
      ],
    },
    publications: [],
  },
  // Agregar más miembros según sea necesario
];
