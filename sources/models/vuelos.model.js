import mongoose from "mongoose";

const vueloSchema = new mongoose.Schema({
  vueloNumber:{
    type:String,
    required:true,
    trim:true
  },
  timeArrive:{
    type:Date,
    required:true,
    trim:true
  },
  empresa:{
   type:String,
   required:true,

  },
  demorado:{  
    type:Boolean
  }
},
{
  timestamps:true
})

export default mongoose.model('Vuelo',vueloSchema);