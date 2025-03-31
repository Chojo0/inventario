/* importamos al framework express */
import express from 'express';
import categoriasRoutes from './routers/categorias.routes.js';

/* asignamos a app toda la funcionalidad para el servidor web */
const app = express();

/* setear el puerto del servidor web */
app.set('port', 5000);

/* Routers */
app.use("/api/categorias", categoriasRoutes);

/* hacemos disponible a mi server app para todos los hosts */
export default app;
