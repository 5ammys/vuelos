import mongoose from "mongoose";

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

export default mongoose.model('Vuelo', vueloSchema);