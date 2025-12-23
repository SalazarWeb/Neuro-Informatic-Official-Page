import type { Student } from '../types';

export const students: Student[] = [
  // Estudiantes de Doctorado
  {
    id: 'student-1',
    name: 'María González',
    level: 'phd',
    program: {
      es: 'Doctorado en Neurociencias',
      en: 'PhD in Neuroscience',
    },
    supervisor: 'member-1',
    startYear: 2022,
    expectedGraduation: 2026,
    project: 'project-1',
    researchInterests: {
      es: [
        'Análisis de conectividad funcional',
        'Redes neuronales en reposo',
        'Neuroimagen computacional',
      ],
      en: [
        'Functional connectivity analysis',
        'Resting-state neural networks',
        'Computational neuroimaging',
      ],
    },
    email: 'm.gonzalez@university.edu',
  },
  {
    id: 'student-2',
    name: 'Carlos Ramirez',
    level: 'phd',
    program: {
      es: 'Doctorado en Ciencias de la Computación',
      en: 'PhD in Computer Science',
    },
    supervisor: 'member-1',
    startYear: 2023,
    expectedGraduation: 2027,
    project: 'project-2',
    researchInterests: {
      es: [
        'Modelado computacional de plasticidad sináptica',
        'Simulación de redes neuronales',
        'Aprendizaje automático aplicado a neurociencias',
      ],
      en: [
        'Computational modeling of synaptic plasticity',
        'Neural network simulation',
        'Machine learning applied to neuroscience',
      ],
    },
    email: 'c.ramirez@university.edu',
  },
  {
    id: 'student-3',
    name: 'Ana Silva',
    level: 'phd',
    program: {
      es: 'Doctorado en Neurociencias',
      en: 'PhD in Neuroscience',
    },
    supervisor: 'member-1',
    startYear: 2024,
    expectedGraduation: 2028,
    project: 'project-4',
    researchInterests: {
      es: [
        'Biomarcadores para trastornos cognitivos',
        'Aprendizaje automático en neuroimagen',
        'Diagnóstico temprano de Alzheimer',
      ],
      en: [
        'Biomarkers for cognitive disorders',
        'Machine learning in neuroimaging',
        'Early diagnosis of Alzheimer',
      ],
    },
    email: 'a.silva@university.edu',
  },

  // Estudiantes de Magíster
  {
    id: 'student-4',
    name: 'Diego Torres',
    level: 'master',
    program: {
      es: 'Magíster en Neurociencias',
      en: 'Master in Neuroscience',
    },
    supervisor: 'member-1',
    startYear: 2024,
    expectedGraduation: 2026,
    project: 'project-3',
    researchInterests: {
      es: [
        'Procesamiento de señales EEG',
        'Análisis de componentes independientes',
        'Desarrollo de herramientas de software',
      ],
      en: [
        'EEG signal processing',
        'Independent component analysis',
        'Software tool development',
      ],
    },
    email: 'd.torres@university.edu',
  },
  {
    id: 'student-5',
    name: 'Laura Mendoza',
    level: 'master',
    program: {
      es: 'Magíster en Ciencias Biomédicas',
      en: 'Master in Biomedical Sciences',
    },
    supervisor: 'member-1',
    startYear: 2024,
    expectedGraduation: 2026,
    researchInterests: {
      es: [
        'Análisis de imágenes de resonancia magnética',
        'Segmentación cerebral automatizada',
        'Morfometría basada en vóxeles',
      ],
      en: [
        'MRI image analysis',
        'Automated brain segmentation',
        'Voxel-based morphometry',
      ],
    },
    email: 'l.mendoza@university.edu',
  },

  // Estudiantes de Pregrado
  {
    id: 'student-6',
    name: 'Sofía Vargas',
    level: 'undergraduate',
    program: {
      es: 'Ingeniería Civil en Informática',
      en: 'Computer Science Engineering',
    },
    supervisor: 'member-1',
    startYear: 2024,
    expectedGraduation: 2025,
    researchInterests: {
      es: [
        'Visualización de datos neurocientíficos',
        'Desarrollo web para análisis de datos',
        'Interfaces de usuario para neuroimagen',
      ],
      en: [
        'Neuroscientific data visualization',
        'Web development for data analysis',
        'User interfaces for neuroimaging',
      ],
    },
  },
  {
    id: 'student-7',
    name: 'Martín Olivares',
    level: 'undergraduate',
    program: {
      es: 'Ingeniería en Biotecnología',
      en: 'Biotechnology Engineering',
    },
    supervisor: 'member-1',
    startYear: 2025,
    expectedGraduation: 2025,
    project: 'project-3',
    researchInterests: {
      es: [
        'Análisis de datos de EEG',
        'Procesamiento de señales biomédicas',
        'Programación en Python',
      ],
      en: [
        'EEG data analysis',
        'Biomedical signal processing',
        'Python programming',
      ],
    },
  },

  // Egresados
  {
    id: 'student-8',
    name: 'Roberto Fuentes',
    level: 'phd',
    program: {
      es: 'Doctorado en Neurociencias',
      en: 'PhD in Neuroscience',
    },
    supervisor: 'member-1',
    startYear: 2019,
    endYear: 2023,
    thesis: {
      es: 'Dinámica Temporal de Redes Neuronales Durante Procesos de Toma de Decisiones: Un Enfoque Computacional',
      en: 'Temporal Dynamics of Neural Networks During Decision-Making Processes: A Computational Approach',
    },
  },
  {
    id: 'student-9',
    name: 'Patricia Morales',
    level: 'master',
    program: {
      es: 'Magíster en Neurociencias',
      en: 'Master in Neuroscience',
    },
    supervisor: 'member-1',
    startYear: 2022,
    endYear: 2024,
    thesis: {
      es: 'Desarrollo de Métodos de Preprocesamiento para Datos de Electroencefalografía de Alta Densidad',
      en: 'Development of Preprocessing Methods for High-Density Electroencephalography Data',
    },
  },
];
