import React from 'react'
import { useNavigate } from 'react-router-dom'

import { get } from '../localStorage'

export default function privateRoute({ children }) {
  const navigate = useNavigate();
  // const [status, setStatus] 
  // console.log(req.authinfo)
  React.useEffect(() => {
    // cek apakah token sudah ada
    const token = get('coffeshop-token');
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
  React.useEffect(() => {
    // cek apakah token sudah ada
    const token = get('coffeshop-token');
    if(token) navigate('/', {
      replace: true,
    });
  }, [])
  return <>{children}</>;
}