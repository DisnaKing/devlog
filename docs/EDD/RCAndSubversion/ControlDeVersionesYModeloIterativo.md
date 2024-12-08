# Actividad 2: Control de versiones y modelo iterativo

En un proyecto que sigue un modelo de desarrollo iterativo e incremental y utiliza Subversion (SVN), la estructura del repositorio debe permitir una clara separación entre las fases y versiones del proyecto. Propongo la siguiente estructura para el repositorio:

## Estructura del repositorio SVN

### Justificación

1. **/trunk**: Contiene la versión estable del código, que debe funcionar correctamente en todo momento.
2. **/branches**: Permite el desarrollo de nuevas funcionalidades o iteraciones. Cada iteración se trabaja en una rama separada.
3. **/tags**: Contiene etiquetas para versiones estables del producto (releases). Estas versiones pueden ser utilizadas para desplegar o probar el producto.

Esta estructura garantiza un trabajo claramente organizado, con separación entre el código estable (`/trunk`), las ramas de iteraciones en curso (`/branches`), y las versiones finales o estables (`/tags`).
