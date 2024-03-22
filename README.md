# Actualización Automática de Datos de Usuarios

Este script de Node.js automatiza la generación del archivo `userData.json` basado en los archivos de imágenes presentes en la carpeta `./src/img`. El archivo `userData.json` contiene información sobre los nombres de usuarios y los archivos de imágenes asociados, lo que puede ser útil para diversas aplicaciones web.

## Requisitos

- Node.js instalado en tu sistema.
- Carpeta de imágenes `./src/img` con imágenes de usuarios en formato .jpg o .png.

## Uso

1. Clona o descarga este repositorio en tu sistema.
2. Abre una terminal en el directorio del repositorio.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el script para generar el archivo userData.json:
   node generateUserData.js
5. Para mantener la actualización automática de userData.json, puedes dejar el script en ejecución:
   node watchImages.js
