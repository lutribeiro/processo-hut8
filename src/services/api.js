import axios from 'axios'
const api = 'https://site-v3-api.herokuapp.com/'

export default axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})