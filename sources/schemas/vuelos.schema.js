import {z} from 'zod'


export const vuelosSchema = z.object({
  flightNumber:z.string({
    required_error:'El numero de vuelo es requerido'
  }),
  airlineName:z.string({
    required_error:'La linea aerea es requerida'
  }),
  isDelayed:z.boolean()
})