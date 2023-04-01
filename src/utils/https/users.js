/* eslint-disable no-undef */
import axios from "axios";

// const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;
// import { get } from '../localStorage'

export const getUsers = (controller) => {
  return axios.get('https://jsonplaceholder.typicode.com/users', {
    signal: controller.signal
  })
}