/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import axios from 'axios'
// import { json } from 'react-router-dom'

export const getProducts = (controller, querys) => {
  const url = process.env.REACT_APP_SERVER_HOST;
  return axios.get(`${url}/products?${querys}`, {
    signal: controller.signal,
  })
}

export const getProductsDetail = (controller, id) => {
  const url = process.env.REACT_APP_SERVER_HOST
  console.log(id)
  return axios.get(`${url}/products/${id}`, {
    signal: controller.signal
  })
}