import Vuelo from '../models/vuelos.model.js'

export const getVuelos = async (req,res) => {
  const vuelos=await Vuelo.find();
  res.json(vuelos);
}

export const createVuelo = async (req, res) => {
  const { vueloNumber,timeArrive,empresa,demorado  } = req.body;

  try {
    // Validar si la canción ya existe
    const vueloFounded = await Vuelo.findOne({vueloNumber});
    if (vueloFounded) {
      return res.status(400).json({ error: 'El vuelo ya existe' });
    }

    // Crear la nueva canción
    const newVuelo = new Vuelo({
      vueloNumber,
      timeArrive,
      empresa,
      demorado
    });

    // Guardar el vuelo en la base de datos
    const vueloSaved = await newVuelo.save();

    res.json(vueloSaved);
  } catch (error) {
    // Manejar los errores de manera adecuada
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

export const updateVuelo = async (req,res) => {
  const vuelo = Vuelo.findByIdAndUpdate(req.params.id);
  if(!vuelo) return res.status(404).json(['El vuelo no fue encontrado']);

  return res.sendStatus(204);
}

export const deleteVuelo = async (req,res) => {
  const vuelo = await Vuelo.findByIdAndDelete(req.params.id);
  if(!vuelo) return res.status(404).json(['El vuelo no fue encontrado']);

  return res.sendStatus(204);
}