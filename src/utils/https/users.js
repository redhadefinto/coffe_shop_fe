/* eslint-disable no-undef */
import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;
import { get } from '../localStorage'

export const uploadImage = (img, controller) => {
  const fromData = new FormData();
  fromData.append("image", img);
  const url = `${baseUrl}/cloud/user`;
  const token = get("coffeshop-token");
  return axios.post(url, fromData, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUsers = (controller) => {
  return axios.get('https://jsonplaceholder.typicode.com/users', {
    signal: controller.signal
  })
}