import type { ClusterResource } from '../types';

export const clusterResources: ClusterResource[] = [
  {
    id: 'cluster-1',
    name: 'High-Performance Computing Cluster',
    description: {
      es: 'Infraestructura de cómputo de alto rendimiento para análisis de datos neuronales a gran escala.',
      en: 'High-performance computing infrastructure for large-scale neural data analysis.',
    },
    specs: [
      {
        label: { es: 'Nodos de cómputo', en: 'Compute nodes' },
        value: '32',
      },
      {
        label: { es: 'Cores totales', en: 'Total cores' },
        value: '1024',
      },
      {
        label: { es: 'Memoria RAM', en: 'RAM memory' },
        value: '4 TB',
      },
      {
        label: { es: 'Almacenamiento', en: 'Storage' },
        value: '500 TB',
      },
    ],
    access: {
      es: 'Acceso disponible para miembros del departamento y colaboradores mediante solicitud.',
      en: 'Access available for department members and collaborators upon request.',
    },
  },
];
