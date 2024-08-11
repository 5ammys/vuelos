import Vuelo from '../models/vuelos.model.js'

export const getVuelos = async (req,res) => {
  const vuelos=await Vuelo.find();
  
  res.json(vuelos);
}

export const createVuelo = async (req, res) => {
  const { 
    timeArrive,
    flightNumber,
    airlineName,
    isDelayed
  } = req.body;

  try {
    // Validar si la canción ya existe
    const flightFounded = await Vuelo.findOne({flightNumber});
    if (flightFounded) {
      return res.status(400).json({ error: 'El vuelo ya existe' });
    }

    // Crear la nueva canción
    const newVuelo = new Vuelo({
      timeArrive,
      flightNumber,
      airlineName,
      isDelayed
    });

    
    // Guardar el vuelo en la base de datos
    const vueloSaved = await newVuelo.save();

    res.json(vueloSaved);
  } catch (error) {
    // Manejar los errores de manera adecuada
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export const updateVuelo = async (req, res) => {
  const { flightNumber, ...updateData } = req.body;

  try {
    // Buscar y actualizar el vuelo
    const vuelo = await Vuelo.findOneAndUpdate(
      { flightNumber },
      updateData,
      { new: true } // Devuelve el documento actualizado
    );

    if (!vuelo) {
      return res.status(404).json({ error: 'El vuelo no fue encontrado' });
    }

    return res.json(vuelo); // Devolver el vuelo actualizado
  } catch (error) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}


export const deleteVuelo = async (req,res) => {
  const flightNumber = req.params.id
  try {
    const vuelo = await Vuelo.findOneAndDelete({flightNumber})
    if(!vuelo) return res.status(404).json(['El vuelo no fue encontrado']);
  
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}