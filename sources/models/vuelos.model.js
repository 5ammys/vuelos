import mongoose from "mongoose";
//Se crea el Schema con el objeto detallado 
const vueloSchema = new mongoose.Schema({
  timeArrive: {
    type: Date, 
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
  airlineName: {
    type: String,
    required: true,
    trim: true,
  },
  isDelayed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});
// Se exporta el Schema con el nombre 'Vuelo'
export default mongoose.model('Vuelo', vueloSchema);