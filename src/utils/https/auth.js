/* eslint-disable no-undef */
import axios from "axios"

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;
// import { get } from '../localStorage'


export const login = (email, password, controller) => {
  const body = {
    email, 
    password,
  }
  const url = `${baseUrl}/auth`;
  return axios.post(url, body, {
    signal: controller.signal,
  });
}

export const register = (email, password, phoneNumber, controller) => {
  const body = {
    email,
    password,
    phoneNumber
  }
  const url = `${baseUrl}/auth/register`;
  return axios.post(url, body, {
    signal: controller.signal
  })
}