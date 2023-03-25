import axios from 'axios'

export const getProducts = (controller, query) => {
  // eslint-disable-next-line no-undef
  const url = process.env.REACT_APP_SERVER_HOST;
  if(!query) {
    return axios.get(`${url}/products`, {
      signal: controller.signal,
    });
  }
  return axios.get(`${url}/products?${query}`, {
    signal: controller.signal,
  })
}