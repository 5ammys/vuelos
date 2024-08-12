import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import vuelosRoutes from './routes/vuelos.routes.js';

// Se inicia una instancia de la aplicacion de express
const app = express();
// Inyectan diferentes dependencias
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api",vuelosRoutes);
// Se exporta la instancia de express como 'app'
export default app;
