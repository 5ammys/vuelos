import {z} from 'zod'

// Se crea una instancia de zod para la validacion de los datos del Schema Vuelo
export const vuelosSchema = z.object({
  flightNumber:z.string({
    required_error:'El numero de vuelo es requerido'
  }),
  airlineName:z.string({
    required_error:'La linea aerea es requerida'
  }),
  isDelayed:z.boolean()
})