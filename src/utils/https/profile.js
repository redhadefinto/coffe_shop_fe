import axios from "axios";
// import { useSelector } from "react-redux";

// eslint-disable-next-line no-undef
const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;
export const getProfile = (controller, token) => {
  // console.log(token)
  return axios.get(`${baseUrl}/profile`, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadImage = (img, token, controller) => {
  const fromData = new FormData();
  fromData.append("image", img);
  const url = `${baseUrl}/cloud/user`;
  return axios.post(url, fromData, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const patchProfile = ({form, token, controller}, genderUpdate) => {
  // console.log(form)
  // console.log(filevalue)
  // console.log(genderUpdate)
  const gender = genderUpdate.gender
  const url = `${baseUrl}/profile`;
  const body = {
    ...form,
    gender
  }
  console.log(body)
  // console.log(form)
  // const formData = new FormData();
  // if(filevalue) {
  //   formData.append("image", filevalue);
  // }
  // // console.log(formData)
  // for (const [key, value] of Object.entries(form)) {
  //   formData.append(key, value);
  // }
  // console.log(formData)
  return axios.patch(url, body, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateDataUser = (file, body, token, controller) => {
  const url = `${baseUrl}/auth/profile`;
  const formData = new FormData();
  if (file !== "") {
    formData.append("image", file);
  }
  Object.keys(body).forEach((key) => {
    formData.set(key, body[key]);
  });
  console.log(formData);
  return axios.patch(url, formData, {
    signal: controller.signal,
    headers: { Authorization: `Bearer ${token}` },
  });
};