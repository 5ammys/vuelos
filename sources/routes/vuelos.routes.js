import { Router } from 'express';
import { 
  createVuelo,
  updateVuelo,
  deleteVuelo,
  getVuelos
} from '../controllers/vuelos.controller.js'
import { validateSchema } from '../middlewares/validateData.js'

const router = Router();

router.post('/vuelo',createVuelo);
router.put('/vuelo/:id',updateVuelo);
router.delete('/vuelo/:id',deleteVuelo);
router.get('/vuelo',getVuelos);

export default router;