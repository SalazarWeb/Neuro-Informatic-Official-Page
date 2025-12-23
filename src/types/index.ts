export interface Member {
  id: string;
  name: string;
  category: 'lab-member' | 'collaborator';
  role: {
    es: string;
    en: string;
  };
  affiliation: {
    department: {
      es: string;
      en: string;
    };
    center: string;
  };
  email: string;
  phone?: string;
  photo?: string;
  cv: {
    es: string;
    en: string;
  };
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  research: {
    es: string[];
    en: string[];
  };
  publications?: {
    title: string;
    authors: string;
    journal: string;
    year: number;
    doi?: string;
  }[];
  orcid?: string;
  googleScholar?: string;
  researchGate?: string;
  socialNetworks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  openSource?: {
    name: string;
    description: {
      es: string;
      en: string;
    };
    url: string;
  }[];
  supervisedStudents?: string[]; // student IDs
}

export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  status: 'active' | 'completed';
  startDate: string;
  endDate?: string;
  funding?: {
    es: string;
    en: string;
  };
  members: string[]; // member IDs
}

export interface Student {
  id: string;
  name: string;
  level: 'undergraduate' | 'master' | 'phd';
  program: {
    es: string;
    en: string;
  };
  supervisor: string; // member ID
  startYear: number;
  endYear?: number;
  expectedGraduation?: number;
  project?: string; // project ID
  thesis?: {
    es: string;
    en: string;
  };
  researchInterests?: {
    es: string[];
    en: string[];
  };
  email?: string;
}

export interface ClusterResource {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  specs: {
    label: {
      es: string;
      en: string;
    };
    value: string;
  }[];
  access: {
    es: string;
    en: string;
  };
}

export interface ClusterDocument {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  category: 'getting-started' | 'technical-guide' | 'resource' | 'tutorial';
  type: 'document' | 'download' | 'external-link';
  url?: string;
  downloadUrl?: string;
  fileSize?: string;
  lastUpdated?: string;
  icon?: string;
}
