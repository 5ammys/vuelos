// Función para validar el esquema de datos
export const validateSchema = (schema) => (req, res, next) => {
  try {
    // Intenta validar el cuerpo de la solicitud con el esquema proporcionado
    schema.parse(req.body);
    // Si la validación es exitosa, pasa al siguiente middleware o ruta
    next();
  } catch (error) {
    // Responde con un estado 400 (Bad Request) y los mensajes de error
    // 'error.issues' contiene los problemas encontrados por el esquema
    return res.status(400).json(error.issues.map(
      error => error.message
    ));
  }
}
