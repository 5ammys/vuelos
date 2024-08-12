import mongoose from "mongoose";

// La funcion trata de conectarse a la base de datos
// de vuelos creada con MongoDB
export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/FlyDb");
        console.log("DB is connected")
    }catch(error){
        console.log(error);
    }
}