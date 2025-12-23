# Sitio Web Institucional - Departamento de Neuroinformática CNeuro

Sitio web académico e institucional del Departamento de Neuroinformática de CNeuro.

## Características

- **Bilingüe**: Español e Inglés
- **Diseño minimalista**: Inspirado en departamentos académicos de UGent, Harvard, Oxford y Cambridge
- **Contenido gestionable**: Datos estructurados para fácil actualización
- **Responsive**: Diseño adaptable a todos los dispositivos

## Estructura del Proyecto

```
src/
├── components/
│   └── layout/
│       ├── Header.tsx        # Navegación y cambio de idioma
│       ├── Footer.tsx        # Información de contacto
│       └── Layout.tsx        # Contenedor principal
├── pages/
│   ├── Home.tsx              # Página principal con foto grupal
│   ├── Members.tsx           # Listado de miembros
│   ├── MemberDetail.tsx      # Perfil detallado de miembro
│   ├── Projects.tsx          # Proyectos de investigación
│   ├── Cluster.tsx           # Recursos computacionales
│   └── Students.tsx          # Estudiantes actuales y egresados
├── data/
│   ├── members.ts            # Datos de miembros del departamento
│   ├── projects.ts           # Información de proyectos
│   ├── students.ts           # Datos de estudiantes
│   └── cluster.ts            # Recursos del cluster
├── i18n/
│   ├── config.ts             # Configuración de i18next
│   └── locales/
│       ├── es.json           # Traducciones en español
│       └── en.json           # Traducciones en inglés
├── types/
│   └── index.ts              # Tipos TypeScript
└── styles/
    └── institutional.css     # Estilos institucionales
```

## Comandos

### Desarrollo
```bash
pnpm dev
```

### Compilar para producción
```bash
pnpm build
```

### Vista previa de producción
```bash
pnpm preview
```

## Actualizar Contenido

### Agregar un Miembro

Edita \`src/data/members.ts\`:

```typescript
{
  id: 'unique-id',
  name: 'Dr. Nombre Apellido',
  role: {
    es: 'Investigador Principal',
    en: 'Principal Investigator',
  },
  email: 'email@cneuro.edu',
  photo: '/images/members/nombre-apellido.jpg',
  bio: {
    es: 'Biografía en español...',
    en: 'Biography in English...',
  },
  education: [
    {
      degree: 'PhD in Neuroscience',
      institution: 'Universidad',
      year: 2020,
    },
  ],
  research: {
    es: ['Área 1', 'Área 2'],
    en: ['Area 1', 'Area 2'],
  },
  publications: [...],
  orcid: '0000-0000-0000-0000',
  googleScholar: 'https://scholar.google.com/...',
}
```

### Agregar un Proyecto

Edita \`src/data/projects.ts\`:

```typescript
{
  id: 'project-id',
  title: {
    es: 'Título del proyecto',
    en: 'Project title',
  },
  description: {
    es: 'Descripción...',
    en: 'Description...',
  },
  status: 'active', // o 'completed'
  startDate: '2023-01',
  endDate: '2025-12', // opcional
  funding: {
    es: 'Fuente de financiamiento',
    en: 'Funding source',
  },
  members: ['member-1', 'member-2'], // IDs de miembros
}
```

### Agregar un Estudiante

Edita \`src/data/students.ts\`:

```typescript
{
  id: 'student-id',
  name: 'Nombre del Estudiante',
  program: {
    es: 'Doctorado en Neurociencias',
    en: 'PhD in Neuroscience',
  },
  supervisor: 'member-id',
  startYear: 2022,
  endYear: 2026, // opcional, para egresados
  thesis: { // opcional
    es: 'Título de la tesis',
    en: 'Thesis title',
  },
  email: 'estudiante@email.com',
}
```

### Actualizar Recursos del Cluster

Edita \`src/data/cluster.ts\` siguiendo la estructura de \`ClusterResource\`.

## Imágenes

Coloca las imágenes en \`public/images/\`:

- \`public/images/cneuro-logo.svg\` - Logo de CNeuro
- \`public/images/group-photo.jpg\` - Foto grupal del departamento
- \`public/images/members/\` - Fotos de los miembros

## Diseño

El diseño sigue principios institucionales:

- **Colores**: Paleta azul académica, neutral y profesional
- **Tipografía**: Sans-serif limpia y legible
- **Espaciado**: Generoso para facilitar lectura
- **Sin animaciones**: Enfoque en contenido
- **Accesibilidad**: Alto contraste y navegación clara

## Tecnologías

- React 19
- TypeScript
- Vite
- React Router
- i18next
- CSS Variables

## Licencia

© 2025 CNeuro - Departamento de Neuroinformática
