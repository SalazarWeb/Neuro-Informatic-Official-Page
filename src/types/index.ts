export interface Member {
  id: string;
  name: string;
  role: {
    es: string;
    en: string;
  };
  email: string;
  photo?: string;
  bio: {
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
  program: {
    es: string;
    en: string;
  };
  supervisor: string; // member ID
  startYear: number;
  endYear?: number;
  thesis?: {
    es: string;
    en: string;
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
