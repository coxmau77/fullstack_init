import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar la carpeta pública para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Página Principal' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`*************************************************\n Servidor en ejecución en http://localhost:${PORT} \n*************************************************`);
});
