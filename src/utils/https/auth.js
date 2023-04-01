/* eslint-disable no-undef */
import axios from "axios"
// import { transform } from "lodash";

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;
// import { get } from '../localStorage'


export const login = (email, password, controller) => {
  // console.log(email, password
  const body = {
    email, 
    password,
  }
  const url = `${baseUrl}/auth`;
  return axios.post(url, body,
  {
    signal: controller.signal,
  });
}

export const register = (email, password, phoneNumber, controller) => {
  const body = {
    email,
    password,
    phoneNumber
  }
  // console.log(body)
  const url = `${baseUrl}/auth/register`;
  return axios.post(url, body, {
    signal: controller.signal
  })
}

export const getOtp = (email, controller) => {
  const url = `${baseUrl}/auth/otp`;
  return axios.patch(url, { email }, { signal: controller.signal });
};

export const forgot = (email, code_otp, password, controller) => {
  const url = `${baseUrl}/auth/forgot`;
  const body = { email, otp: code_otp, password };
  // console.log(body)
  return axios.patch(url, body, { signal: controller.signal });
};

export const logOut = (token, controller) => {
  const url = `${baseUrl}/auth/logout`;
  return axios.patch(url, {}, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
}

// export const logOut = ()