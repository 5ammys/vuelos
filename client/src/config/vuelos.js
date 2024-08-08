import axios from './axios.js'

export const saveFly = fly => axios.post('/fly',fly)
export const updateFly = fly => axios.put(`/fly/${fly.id}`,fly)
export const deleteFly = fly => axios.delete(`/fly/${fly.id}`)
export const getFlies = () => axios.get('/fly')