// Actualiza la configuración de Mongoose: Para manejar el aviso de deprecación, agrega la siguiente línea al inicio de tu archivo server.js:
mongoose.set('strictQuery', false);

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const { DB_URI, PORT = 3000 } = process.env;

const app = express();
const __dirname = path.resolve();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Conectar a la base de datos MongoDB y al servidor
mongoose.connect(DB_URI).
    then(() => {
        app.listen(PORT, () => {
            console.log(`*************************************************\n Servidor en ejecución en http://localhost:${PORT} y conexión a la base de datos. \n*************************************************`);
        });
    })
    .catch(error => console.log(error));