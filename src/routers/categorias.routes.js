import { Router } from 'express';
import { methodHTTP as categoriaController } from '../controllers/categoria.controllers.js';

/* creamos un router */
const router = Router();

/* configuramos respuesta al GET desde el server */
router.get('/', categoriaController.getCategorias);

/* hacemos disponible el router a la app */
export default router;