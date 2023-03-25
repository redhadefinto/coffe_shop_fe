import React from 'react'
import { useNavigate } from 'react-router-dom'

function withNavigate(Component) {
  function Wrapper(props) {
    const navigate = useNavigate()
    return <Component  navigate={navigate} {...props} />
  }
  return Wrapper;
}

export default withNavigate;