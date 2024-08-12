import { Router } from 'express';
import { 
  createVuelo,
  updateVuelo,
  deleteVuelo,
  getVuelos
} from '../controllers/vuelos.controller.js'
import { validateSchema } from '../middlewares/validateData.js'
import { vuelosSchema } from '../schemas/vuelos.schema.js';
const router = Router();

router.post('/flight',validateSchema(vuelosSchema),createVuelo);
router.put('/flight/:id',validateSchema(vuelosSchema),updateVuelo);
router.delete('/flight/:id',deleteVuelo);
router.get('/flights',getVuelos);

export default router;