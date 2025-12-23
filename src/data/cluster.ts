import type { ClusterResource, ClusterDocument } from '../types';

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

export const clusterDocuments: ClusterDocument[] = [
  {
    id: 'doc-1',
    title: {
      es: 'Guía de Inicio Rápido',
      en: 'Quick Start Guide',
    },
    description: {
      es: 'Instrucciones paso a paso para acceder al cluster por primera vez, configurar tu entorno y ejecutar tu primer trabajo.',
      en: 'Step-by-step instructions to access the cluster for the first time, set up your environment, and run your first job.',
    },
    category: 'getting-started',
    type: 'document',
    url: '/docs/quick-start',
    lastUpdated: '2024-12',
    icon: '🚀',
  },
  {
    id: 'doc-2',
    title: {
      es: 'Solicitud de Acceso al Cluster',
      en: 'Cluster Access Request',
    },
    description: {
      es: 'Procedimiento para solicitar credenciales de acceso al cluster. Incluye requisitos, formularios y tiempos de respuesta.',
      en: 'Procedure to request cluster access credentials. Includes requirements, forms, and response times.',
    },
    category: 'getting-started',
    type: 'document',
    url: '/docs/access-request',
    lastUpdated: '2024-11',
    icon: '🔑',
  },
  {
    id: 'doc-3',
    title: {
      es: 'Configuración de Conexión SSH',
      en: 'SSH Connection Setup',
    },
    description: {
      es: 'Guía detallada para configurar la conexión SSH al cluster desde diferentes sistemas operativos (Linux, macOS, Windows).',
      en: 'Detailed guide to configure SSH connection to the cluster from different operating systems (Linux, macOS, Windows).',
    },
    category: 'getting-started',
    type: 'document',
    url: '/docs/ssh-setup',
    lastUpdated: '2024-10',
    icon: '🔐',
  },
  {
    id: 'doc-4',
    title: {
      es: 'Sistema de Gestión de Trabajos (SLURM)',
      en: 'Job Management System (SLURM)',
    },
    description: {
      es: 'Documentación completa sobre el uso de SLURM para enviar, monitorear y gestionar trabajos en el cluster.',
      en: 'Complete documentation on using SLURM to submit, monitor, and manage jobs on the cluster.',
    },
    category: 'technical-guide',
    type: 'document',
    url: '/docs/slurm-guide',
    lastUpdated: '2024-12',
    icon: '⚙️',
  },
  {
    id: 'doc-5',
    title: {
      es: 'Entornos y Módulos de Software',
      en: 'Software Environments and Modules',
    },
    description: {
      es: 'Guía para cargar y gestionar módulos de software, crear entornos virtuales de Python, y usar contenedores Singularity.',
      en: 'Guide to load and manage software modules, create Python virtual environments, and use Singularity containers.',
    },
    category: 'technical-guide',
    type: 'document',
    url: '/docs/software-modules',
    lastUpdated: '2024-11',
    icon: '📦',
  },
  {
    id: 'doc-6',
    title: {
      es: 'Gestión de Datos y Almacenamiento',
      en: 'Data and Storage Management',
    },
    description: {
      es: 'Mejores prácticas para gestionar datos, optimizar el uso de almacenamiento, y realizar transferencias eficientes de archivos.',
      en: 'Best practices for managing data, optimizing storage usage, and performing efficient file transfers.',
    },
    category: 'technical-guide',
    type: 'document',
    url: '/docs/storage-management',
    lastUpdated: '2024-10',
    icon: '💾',
  },
  {
    id: 'doc-7',
    title: {
      es: 'Optimización de Trabajos Paralelos',
      en: 'Parallel Job Optimization',
    },
    description: {
      es: 'Técnicas avanzadas para optimizar trabajos paralelos, uso eficiente de múltiples nodos, y estrategias de paralelización.',
      en: 'Advanced techniques to optimize parallel jobs, efficient multi-node usage, and parallelization strategies.',
    },
    category: 'technical-guide',
    type: 'document',
    url: '/docs/parallel-optimization',
    lastUpdated: '2024-09',
    icon: '⚡',
  },
  {
    id: 'doc-8',
    title: {
      es: 'Scripts de Ejemplo SLURM',
      en: 'SLURM Example Scripts',
    },
    description: {
      es: 'Colección de scripts de ejemplo para diferentes tipos de trabajos: seriales, paralelos, GPU, arrays, y más.',
      en: 'Collection of example scripts for different job types: serial, parallel, GPU, arrays, and more.',
    },
    category: 'resource',
    type: 'download',
    downloadUrl: '/downloads/slurm-scripts.zip',
    fileSize: '45 KB',
    lastUpdated: '2024-12',
    icon: '📝',
  },
  {
    id: 'doc-9',
    title: {
      es: 'Plantillas de Entornos Conda',
      en: 'Conda Environment Templates',
    },
    description: {
      es: 'Archivos YAML con configuraciones predefinidas de entornos Conda para análisis de neuroimagen, deep learning, y estadística.',
      en: 'YAML files with predefined Conda environment configurations for neuroimaging analysis, deep learning, and statistics.',
    },
    category: 'resource',
    type: 'download',
    downloadUrl: '/downloads/conda-templates.zip',
    fileSize: '12 KB',
    lastUpdated: '2024-11',
    icon: '🐍',
  },
  {
    id: 'doc-10',
    title: {
      es: 'Tutorial: Análisis de fMRI en el Cluster',
      en: 'Tutorial: fMRI Analysis on the Cluster',
    },
    description: {
      es: 'Tutorial completo que muestra cómo ejecutar un pipeline de análisis de fMRI usando FSL y SPM en el cluster.',
      en: 'Complete tutorial showing how to run an fMRI analysis pipeline using FSL and SPM on the cluster.',
    },
    category: 'tutorial',
    type: 'document',
    url: '/docs/tutorial-fmri',
    lastUpdated: '2024-10',
    icon: '🧠',
  },
  {
    id: 'doc-11',
    title: {
      es: 'Tutorial: Procesamiento de EEG a Gran Escala',
      en: 'Tutorial: Large-Scale EEG Processing',
    },
    description: {
      es: 'Guía práctica para procesar múltiples datasets de EEG en paralelo usando job arrays y automatización.',
      en: 'Practical guide to process multiple EEG datasets in parallel using job arrays and automation.',
    },
    category: 'tutorial',
    type: 'document',
    url: '/docs/tutorial-eeg',
    lastUpdated: '2024-09',
    icon: '📊',
  },
  {
    id: 'doc-12',
    title: {
      es: 'Documentación Oficial de SLURM',
      en: 'Official SLURM Documentation',
    },
    description: {
      es: 'Enlace a la documentación oficial completa de SLURM para referencia avanzada.',
      en: 'Link to the complete official SLURM documentation for advanced reference.',
    },
    category: 'resource',
    type: 'external-link',
    url: 'https://slurm.schedmd.com/documentation.html',
    icon: '🔗',
  },
];
