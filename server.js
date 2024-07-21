// Actualiza la configuración de Mongoose: Para manejar el aviso de deprecación, agrega la siguiente línea al inicio de tu archivo server.js:
mongoose.set('strictQuery', false);

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import authRoutes from './src/routes/auth.route.js';
import bodyParser from 'body-parser';
import cors from 'cors'; // Agregar cors

// Cargar las variables de entorno
dotenv.config();

const { DB_URI, PORT = 3000 } = process.env;

const app = express();
const __dirname = path.resolve();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para el análisis del cuerpo de las solicitudes
app.use(bodyParser.json());

// Ruta principal
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/index.html'));
});

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Conectar a la base de datos MongoDB y al servidor
mongoose.connect(DB_URI).
    then(() => {
        app.listen(PORT, () => {
            console.log(`*************************************************\n Servidor en ejecución en http://localhost:${PORT} \n Conexión a la base de datos: mongoDB \n*************************************************`);
        });
    })
    .catch(error => console.log("Error >>> ", error));