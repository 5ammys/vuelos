import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import vuelosRoutes from './routes/vuelos.routes.js';

const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api",vuelosRoutes);

export default app;
