# Conda Environment Templates

Plantillas de entornos Conda predefinidos para diferentes tipos de análisis.

## Plantillas Disponibles

### 1. neuroimaging.yml
Entorno completo para análisis de neuroimagen:
- FSL
- ANTs
- NiBabel
- Nilearn
- Nipype

### 2. deep_learning.yml
Entorno para deep learning aplicado a neurociencias:
- PyTorch
- TensorFlow
- Keras
- scikit-learn
- Pandas
- NumPy

### 3. statistics.yml
Entorno para análisis estadístico:
- R essentials
- statsmodels
- scipy
- pingouin
- seaborn
- matplotlib

### 4. eeg_analysis.yml
Entorno para análisis de EEG/MEG:
- MNE-Python
- PyCWT
- FOOOF
- Autoreject

## Uso

1. Descargar el archivo YAML correspondiente
2. Crear el entorno: `conda env create -f environment.yml`
3. Activar el entorno: `conda activate nombre_entorno`

## Personalización

Puedes editar los archivos YAML para agregar o quitar paquetes según tus necesidades.

## Actualización

Para actualizar un entorno existente:
```bash
conda env update -f environment.yml --prune
```
