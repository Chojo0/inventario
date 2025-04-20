/* importamos al framework express */
import express from 'express';
import cors from 'cors';
import categoriasRoutes from './routers/categorias.routes.js';

/* asignamos a app toda la funcionalidad para el servidor web */
const app = express();

/* asignamos el middleware cors */	
app.use(cors());

/* setear el puerto del servidor web */
app.set('port', 5000);

/* configuramos el tipo de respuesta al formato json */
app.use(express.json());

/* Routers */
app.use("/api/categorias", categoriasRoutes);

/* hacemos disponible a mi server app para todos los hosts */
export default app;
