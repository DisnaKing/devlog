# Actividad 3: Diferencias entre RCS y Subversion

## Diferencias principales entre RCS y Subversion

1. **RCS (Revision Control System)**:
   - RCS es un sistema de control de versiones de archivos individuales.
   - No tiene soporte para repositorios centralizados ni para ramas.
   - Cada archivo tiene su propio historial de cambios, y los cambios se gestionan de forma independiente.

2. **Subversion (SVN)**:
   - SVN es un sistema de control de versiones centralizado que permite gestionar múltiples archivos y directorios.
   - Soporta repositorios centralizados, ramas y etiquetas, lo que facilita el trabajo en equipo y la gestión de versiones.
   - Toda la historia del proyecto se guarda en el repositorio centralizado, y los usuarios trabajan con este repositorio de forma colaborativa.

## Comandos en RCS

- **co (checkout)**: Este comando descarga una versión de un archivo para trabajar en él localmente.

- **ci (check-in):** Este comando sube los cambios realizados a un archivo al repositorio central.

## Comandos en Subversion (SVN)

- **svn co (checkout):** Descarga una copia local de un repositorio para trabajar en ella.

- **svn ci (check-in):** Registra los cambios realizados en los archivos locales al repositorio central, con la opción de hacerlo con un mensaje explicativo.

- **svn st (status):** Muestra el estado de los archivos en la copia local del repositorio (qué archivos han cambiado, añadido, etc.).

- **svn add:** Añade archivos o directorios nuevos al repositorio.

- **svn up (update):** Actualiza la copia local con los cambios más recientes del repositorio.
