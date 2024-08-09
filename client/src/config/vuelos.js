import axios from './axios.js'

export const saveFly = fly => axios.post('/flight',fly)
export const updateFly = fly => axios.put(`/flight/${fly.id}`,fly)
export const deleteFly = id => axios.delete(`/flight/${id}`)
export const getFlies = () => axios.get('/flights')