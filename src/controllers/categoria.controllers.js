import getConnection from '../db/database.js';

/* Funcion asyncrona la cual nos devuelve la promesa de la base de datos */
const getCategorias =  async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias');
        res.json(result);
    } catch (error) {
        console.error("Time to panic");
        
    }     
};

/* Exportamos nuestros metodos HTTP */ 
export const methodHTTP = {
    getCategorias 
};