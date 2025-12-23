# SLURM Example Scripts

Esta carpeta contiene scripts de ejemplo para el sistema de gestión de trabajos SLURM.

## Contenido

### 1. serial_job.sh
Script básico para trabajos seriales (single-core)

### 2. parallel_job.sh
Script para trabajos paralelos usando múltiples cores

### 3. array_job.sh
Script para job arrays (procesar múltiples datasets)

### 4. gpu_job.sh
Script para trabajos que requieren GPU

### 5. interactive_session.sh
Script para iniciar sesión interactiva

## Uso

1. Copiar el script apropiado a tu directorio de trabajo
2. Modificar los parámetros según tus necesidades
3. Enviar con: `sbatch script_name.sh`

## Documentación

Para más información, consulta la guía completa de SLURM en la sección de documentación del cluster.
