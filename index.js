const fs = require('fs');
const path = require('path');

const imgFolder = './src/img';
const userDataFile = 'userData.json';

// Función para generar el archivo userData.json
function generateUserData() {
    fs.readdir(imgFolder, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta:', err);
            return;
        }

        const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
        const userNames = imageFiles.map(fileName => path.basename(fileName, path.extname(fileName)));

        const userData = {
            userNames: userNames,
            imageFiles: imageFiles
        };

        fs.writeFile(userDataFile, JSON.stringify(userData), (err) => {
            if (err) {
                console.error('Error al guardar datos:', err);
                return;
            }
            console.log('Datos guardados correctamente.');
        });
    });
}

// Generar el archivo al iniciar el script
generateUserData();

// Observar cambios en la carpeta de imágenes
fs.watch(imgFolder, (eventType, filename) => {
    console.log(`Evento detectado: ${eventType} - Archivo: ${filename}`);
    generateUserData(); // Volver a generar el archivo userData.json al detectar cambios
});

