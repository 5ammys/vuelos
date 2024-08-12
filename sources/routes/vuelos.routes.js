import { Router } from 'express';
import { 
  createVuelo,
  updateVuelo,
  deleteVuelo,
  getVuelos
} from '../controllers/vuelos.controller.js'
import { validateSchema } from '../middlewares/validateData.js'
import { vuelosSchema } from '../schemas/vuelos.schema.js';
// Se inicia una instancia de Router
const router = Router();
// Se detallan las rutas de la Api por medio de los metodos de Router
router.post('/flight',validateSchema(vuelosSchema),createVuelo);
router.put('/flight/:id',validateSchema(vuelosSchema),updateVuelo);
router.delete('/flight/:id',deleteVuelo);
router.get('/flights',getVuelos);

export default router;