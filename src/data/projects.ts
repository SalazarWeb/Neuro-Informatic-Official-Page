import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: {
      es: 'Análisis de Conectividad Funcional en Redes Neuronales',
      en: 'Functional Connectivity Analysis in Neural Networks',
    },
    description: {
      es: 'Este proyecto investiga los patrones de conectividad funcional en el cerebro humano mediante el desarrollo y aplicación de métodos computacionales avanzados. Se utilizan datos de resonancia magnética funcional (fMRI) y electroencefalografía (EEG) para mapear las redes neuronales y comprender su organización funcional en diferentes estados cognitivos y patológicos.',
      en: 'This project investigates functional connectivity patterns in the human brain through the development and application of advanced computational methods. Functional magnetic resonance imaging (fMRI) and electroencephalography (EEG) data are used to map neural networks and understand their functional organization across different cognitive and pathological states.',
    },
    status: 'active',
    startDate: '2023-01',
    funding: {
      es: 'ANID - Fondecyt Regular 1231234',
      en: 'ANID - Fondecyt Regular 1231234',
    },
    members: ['member-1'],
  },
  {
    id: 'project-2',
    title: {
      es: 'Modelado Computacional de Plasticidad Sináptica',
      en: 'Computational Modeling of Synaptic Plasticity',
    },
    description: {
      es: 'Desarrollo de modelos computacionales para entender los mecanismos de plasticidad sináptica y su rol en el aprendizaje y la memoria. El proyecto integra datos experimentales de electrofisiología con simulaciones computacionales para generar predicciones sobre la dinámica de las sinapsis en diferentes contextos de aprendizaje.',
      en: 'Development of computational models to understand synaptic plasticity mechanisms and their role in learning and memory. The project integrates experimental electrophysiology data with computational simulations to generate predictions about synaptic dynamics in different learning contexts.',
    },
    status: 'active',
    startDate: '2022-06',
    funding: {
      es: 'ANID - Fondecyt Iniciación 11220567',
      en: 'ANID - Fondecyt Iniciación 11220567',
    },
    members: ['member-1'],
  },
  {
    id: 'project-3',
    title: {
      es: 'Desarrollo de Herramientas de Software para Análisis de EEG',
      en: 'Development of Software Tools for EEG Analysis',
    },
    description: {
      es: 'Proyecto enfocado en el desarrollo de herramientas de código abierto para el procesamiento y análisis de señales de electroencefalografía. Las herramientas incluyen algoritmos para preprocesamiento, análisis de componentes independientes, detección de artefactos y análisis de conectividad, diseñadas para ser accesibles a investigadores sin experiencia en programación.',
      en: 'Project focused on developing open-source tools for the processing and analysis of electroencephalography signals. The tools include algorithms for preprocessing, independent component analysis, artifact detection, and connectivity analysis, designed to be accessible to researchers without programming experience.',
    },
    status: 'active',
    startDate: '2021-03',
    members: ['member-1'],
  },
  {
    id: 'project-4',
    title: {
      es: 'Biomarcadores Neuronales para Trastornos Cognitivos',
      en: 'Neural Biomarkers for Cognitive Disorders',
    },
    description: {
      es: 'Investigación sobre la identificación de biomarcadores neuronales mediante técnicas de aprendizaje automático aplicadas a datos de neuroimagen. El objetivo es desarrollar herramientas de diagnóstico y pronóstico para trastornos cognitivos como el deterioro cognitivo leve y la enfermedad de Alzheimer, utilizando características extraídas de imágenes estructurales y funcionales del cerebro.',
      en: 'Research on the identification of neural biomarkers using machine learning techniques applied to neuroimaging data. The goal is to develop diagnostic and prognostic tools for cognitive disorders such as mild cognitive impairment and Alzheimer\'s disease, using features extracted from structural and functional brain images.',
    },
    status: 'active',
    startDate: '2024-01',
    endDate: '2027-12',
    funding: {
      es: 'ANID - Anillo de Investigación ACT210034',
      en: 'ANID - Research Ring ACT210034',
    },
    members: ['member-1'],
  },
  {
    id: 'project-5',
    title: {
      es: 'Dinámica de Redes Neuronales Durante la Toma de Decisiones',
      en: 'Neural Network Dynamics During Decision Making',
    },
    description: {
      es: 'Estudio de la organización temporal de las redes neuronales durante procesos de toma de decisiones mediante análisis de series de tiempo multivariadas. Se utilizan métodos de análisis de conectividad efectiva para identificar las interacciones causales entre regiones cerebrales y su evolución temporal durante tareas de decisión bajo incertidumbre.',
      en: 'Study of the temporal organization of neural networks during decision-making processes through multivariate time series analysis. Effective connectivity analysis methods are used to identify causal interactions between brain regions and their temporal evolution during decision tasks under uncertainty.',
    },
    status: 'completed',
    startDate: '2020-03',
    endDate: '2023-12',
    funding: {
      es: 'ANID - Fondecyt Postdoctorado 3200456',
      en: 'ANID - Fondecyt Postdoctoral 3200456',
    },
    members: ['member-1'],
  },
];
