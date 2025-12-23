import type { Student } from '../types';

export const students: Student[] = [
  {
    id: 'student-1',
    name: 'Student Name',
    program: {
      es: 'Doctorado en Neurociencias',
      en: 'PhD in Neuroscience',
    },
    supervisor: 'member-1',
    startYear: 2022,
  },
  // Agregar más estudiantes según sea necesario
];
