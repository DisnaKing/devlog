# Actividad 1: Desarrollo colaborativo

Cuando varios desarrolladores trabajan con el mismo código fuente, es fundamental establecer mecanismos y procedimientos para evitar conflictos y garantizar la integración eficiente del trabajo. A continuación, describo los mecanismos y procedimientos más convenientes:

## Mecanismos

1. **Control de versiones (SCM)**: Utilizar un sistema de control de versiones (SCM) es esencial para gestionar los cambios en el código fuente y facilitar la colaboración entre los miembros del equipo. Un sistema como Git o Subversion (SVN) es una buena opción.

2. **Branches (Ramas)**: Crear ramas específicas para las tareas que cada desarrollador realiza permite trabajar de forma independiente, evitando interferencias con el trabajo de los demás.

3. **Merge y Pull Requests**: Cuando una rama de trabajo está terminada, puede fusionarse con la rama principal mediante un proceso de *merge*. Este proceso puede ser revisado mediante *pull requests* para garantizar la calidad del código.

4. **Actualizaciones frecuentes**: Cada desarrollador debe mantener su repositorio local sincronizado con el repositorio central, haciendo actualizaciones frecuentes para evitar grandes conflictos a la hora de realizar la fusión de los cambios.

## Procedimiento detallado

1. **Antes de comenzar a trabajar**:
    - **Obtener la última versión** del código desde el repositorio central.
    - **Crear una nueva rama** para la tarea o funcionalidad a desarrollar:

      ```bash
      git checkout -b nueva_funcionalidad
      ```

2. **Durante el desarrollo**:
    - Realizar los cambios locales en la rama.
    - **Commits frecuentes** para guardar un historial detallado de los cambios:

      ```bash
      git add .
      git commit -m "Añadida nueva funcionalidad X"
      ```

3. **Antes de fusionar la rama**:
    - **Descargar las últimas actualizaciones** de la rama principal:

      ```bash
      git checkout main
      git pull origin main
      ```

    - **Fusionar la rama** con la rama principal:

      ```bash
      git checkout main
      git merge nueva_funcionalidad
      ```

4. **Resolver conflictos**:
    - Si se producen conflictos, se deben resolver manualmente. Una vez resueltos, se realiza un nuevo commit:

      ```bash
      git commit -m "Conflictos resueltos"
      ```

5. **Subir los cambios al repositorio central**:
    - Después de fusionar, se hace un **push** de la rama principal al repositorio central:

      ```bash
      git push origin main
      ```
