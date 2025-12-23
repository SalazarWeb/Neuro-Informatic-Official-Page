import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: {
      es: 'Análisis de Conectividad Funcional en Redes Neuronales',
      en: 'Functional Connectivity Analysis in Neural Networks',
    },
    description: {
      es: 'Investigación sobre patrones de conectividad funcional en el cerebro mediante análisis computacional de datos de neuroimagen.',
      en: 'Research on functional connectivity patterns in the brain through computational analysis of neuroimaging data.',
    },
    status: 'active',
    startDate: '2023-01',
    funding: {
      es: 'ANID, Fondecyt Regular',
      en: 'ANID, Fondecyt Regular',
    },
    members: ['member-1'],
  },
  // Agregar más proyectos según sea necesario
];
