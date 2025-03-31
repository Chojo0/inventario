/* Funcion que nos devuelve las categorias de la DB */
const getCategorias =  (req, res) => {
    res.json({"categorias": ["pescado", "carne", "huevos", "frutas", "verduras"]});
};

/* Exportamos nuestros metodos HTTP */
export const methodHTTP = {
    getCategorias 
};