# Cluster Resources - Guía de Administración

## Estructura de Archivos

Los recursos descargables del cluster deben colocarse en la carpeta `/public/downloads/`.

### Directorio de Descargas

```
public/
  downloads/
    slurm-scripts.zip
    conda-templates.zip
    [otros recursos...]
```

## Cómo Agregar Nuevos Documentos

### 1. Agregar el documento a los datos

Edita el archivo `src/data/cluster.ts` y agrega un nuevo objeto al array `clusterDocuments`:

```typescript
{
  id: 'doc-13',
  title: {
    es: 'Título en Español',
    en: 'Title in English',
  },
  description: {
    es: 'Descripción detallada en español',
    en: 'Detailed description in English',
  },
  category: 'getting-started', // o 'technical-guide', 'tutorial', 'resource'
  type: 'document', // o 'download', 'external-link'
  url: '/docs/nuevo-documento', // para documentos y enlaces
  downloadUrl: '/downloads/archivo.zip', // para descargas
  fileSize: '2.5 MB', // opcional, para descargas
  lastUpdated: '2025-01', // opcional
  icon: '📘', // opcional, emoji o unicode
}
```

### 2. Categorías Disponibles

- **getting-started**: Documentos introductorios y guías de inicio
- **technical-guide**: Guías técnicas avanzadas
- **tutorial**: Tutoriales paso a paso
- **resource**: Recursos descargables, plantillas, scripts

### 3. Tipos de Documentos

#### Document (Página interna o externa)
```typescript
type: 'document',
url: '/docs/mi-documento' // o URL externa
```

#### Download (Archivo descargable)
```typescript
type: 'download',
downloadUrl: '/downloads/mi-archivo.zip',
fileSize: '1.2 MB'
```

#### External Link (Enlace externo)
```typescript
type: 'external-link',
url: 'https://example.com/documentacion'
```

### 4. Iconos Recomendados

Use emojis o unicode para los iconos:

- 🚀 Inicio rápido
- 🔑 Acceso/Credenciales
- 🔐 Seguridad/SSH
- ⚙️ Configuración
- 📦 Software/Paquetes
- 💾 Almacenamiento
- ⚡ Optimización
- 📝 Scripts
- 🐍 Python/Conda
- 🧠 Neuroimagen
- 📊 Análisis de datos
- 🔗 Enlaces externos
- 📄 Documentos generales

## Ejemplo Completo

### Agregar un tutorial de análisis de conectividad

1. **Crear el documento** (si es interno):
   - Crear la página en `/src/pages/docs/` o usar un sistema de documentación

2. **Agregar a los datos** (`src/data/cluster.ts`):

```typescript
{
  id: 'doc-14',
  title: {
    es: 'Tutorial: Análisis de Conectividad Cerebral',
    en: 'Tutorial: Brain Connectivity Analysis',
  },
  description: {
    es: 'Guía completa para realizar análisis de conectividad funcional usando datos de fMRI en el cluster.',
    en: 'Complete guide to perform functional connectivity analysis using fMRI data on the cluster.',
  },
  category: 'tutorial',
  type: 'document',
  url: '/docs/tutorial-connectivity',
  lastUpdated: '2025-01',
  icon: '🔗',
}
```

3. **Para archivos descargables**:
   - Coloca el archivo en `/public/downloads/`
   - Actualiza `downloadUrl` con la ruta correcta
   - Especifica el `fileSize`

```typescript
{
  id: 'doc-15',
  title: {
    es: 'Scripts de Análisis de Conectividad',
    en: 'Connectivity Analysis Scripts',
  },
  description: {
    es: 'Colección de scripts Python para análisis de conectividad funcional y efectiva.',
    en: 'Collection of Python scripts for functional and effective connectivity analysis.',
  },
  category: 'resource',
  type: 'download',
  downloadUrl: '/downloads/connectivity-scripts.zip',
  fileSize: '850 KB',
  lastUpdated: '2025-01',
  icon: '🔗',
}
```

## Mejores Prácticas

1. **Nombres de archivo**: Use nombres descriptivos y sin espacios
   - ✅ `slurm-scripts-v2.zip`
   - ❌ `Scripts SLURM (nuevo).zip`

2. **Tamaño de archivos**: Comprima archivos grandes antes de subirlos

3. **Actualizaciones**: Actualice el campo `lastUpdated` cuando modifique un documento

4. **Descripciones**: Sea específico y claro en las descripciones

5. **Categorización**: Coloque cada documento en la categoría más apropiada

6. **Traducciones**: Siempre incluya tanto español como inglés

## Mantenimiento

- Revise y actualice los documentos regularmente
- Elimine recursos obsoletos
- Mantenga los enlaces externos activos
- Actualice las fechas de modificación
- Compruebe que los archivos descargables funcionen correctamente
