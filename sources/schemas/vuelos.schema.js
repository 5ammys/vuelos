import {z} from 'zod'


export const vuelosSchema = z.object({
  vueloNumber:z.string({
    required_error:'El numero de vuelo es requerido'
  }),
  timeArrive:z.date(),
  empresa:z.string({
    required_error:'La linea aerea es requerida'
  }),
  demorado:z.boolean()
})