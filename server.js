import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`*************************************************\n Servidor en ejecución en http://localhost:${PORT} \n*************************************************`);
});
