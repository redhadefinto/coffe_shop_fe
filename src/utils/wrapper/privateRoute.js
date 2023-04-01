/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom'

// import { get } from '../localStorage'
import { useSelector } from "react-redux";

export default function privateRoute({ children }) {
  const navigate = useNavigate();
  // const [status, setStatus] 
  // console.log(req.authinfo)
  const token = useSelector((state) => state.auth.data.token);
  React.useEffect(() => {
    // cek apakah token sudah ada
    if(!token) navigate('/login', {
      replace: true,
    });
  }, [])
  return <>{children}</>;
}

export function IsLogin({ children }) {
  const navigate = useNavigate();
  // const [status, setStatus] 
  // console.log(req.authinfo)
  const token = useSelector((state) => state.auth.data.token);
  React.useEffect(() => {
    // cek apakah token sudah ada
    if(token) navigate('/', {
      replace: true,
    });
  }, [])
  return <>{children}</>;
}