import { Router } from 'express';
import { methodHTTP as categoriaController } from '../controllers/categoria.controllers.js';

/* creamos un router */
const router = Router();

/* configuramos respuesta al GET desde el server */
router.get('/', categoriaController.getCategorias);

/* configuramos respuesta al POST desde el server */
router.post('/', categoriaController.postCategorias);

/* configuramos ruta para eliminar una categoria */
router.delete('/:id', categoriaController.deleteCategory);

/* configuramos ruta que recibe parametros desde el server */
router.get('/:id', categoriaController.getCategory);

/*ruta que recibe parametros del cuerpo del request */
router.put('/:id', categoriaController.updateCategorias);

/* hacemos disponible el router a la app */
export default router;