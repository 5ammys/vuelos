import Vuelo from '../models/vuelos.model.js';  // Importa el modelo de Vuelo

// Obtener todos los vuelos
export const getVuelos = async (req, res) => {
  const vuelos = await Vuelo.find();  // Busca todos los vuelos en la base de datos
  res.json(vuelos);  // Envía los vuelos como respuesta en formato JSON
}

// Crear un nuevo vuelo
export const createVuelo = async (req, res) => {
  const { 
    timeArrive,
    flightNumber,
    airlineName,
    isDelayed
  } = req.body;  // Extrae los datos del cuerpo de la solicitud

  try {
    // Validar si el vuelo ya existe en la base de datos
    const flightFounded = await Vuelo.findOne({ flightNumber });
    if (flightFounded) {
      return res.status(400).json({ error: 'El vuelo ya existe' });  // Responde con error si el vuelo ya existe
    }

    // Crear una instancia de Vuelo con los datos proporcionados
    const newVuelo = new Vuelo({
      timeArrive,
      flightNumber,
      airlineName,
      isDelayed
    });

    // Guardar el nuevo vuelo en la base de datos
    const vueloSaved = await newVuelo.save();
    res.json(vueloSaved);  // Responde con el vuelo guardado en formato JSON
  } catch (error) {
    // Manejar errores internos del servidor
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Actualizar un vuelo existente
export const updateVuelo = async (req, res) => {
  const { flightNumber, ...updateData } = req.body;  // Extrae el número de vuelo y los datos a actualizar

  try {
    // Buscar y actualizar el vuelo en la base de datos
    const vuelo = await Vuelo.findOneAndUpdate(
      { flightNumber },
      updateData,
      { new: true }  // Devuelve el documento actualizado
    );

    if (!vuelo) {
      return res.status(404).json({ error: 'El vuelo no fue encontrado' });  // Responde con error si no se encuentra el vuelo
    }

    return res.json(vuelo);  // Responde con el vuelo actualizado en formato JSON
  } catch (error) {
    // Manejar errores internos del servidor
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

// Eliminar un vuelo
export const deleteVuelo = async (req, res) => {
  const flightNumber = req.params.id;  // Extrae el número de vuelo de los parámetros de la solicitud

  try {
    // Buscar y eliminar el vuelo en la base de datos
    const vuelo = await Vuelo.findOneAndDelete({ flightNumber });
    if (!vuelo) return res.status(404).json(['El vuelo no fue encontrado']);  // Responde con error si no se encuentra el vuelo

    return res.sendStatus(204);  // Responde con código de estado 204 (No Content) si la eliminación fue exitosa
  } catch (error) {
    // Manejar errores internos del servidor
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
