import React from 'react'
import { useParams } from 'react-router-dom'


const EditUser = () => {

  const params = useParams()
  return (
    <h1>Edit User ID : {params.id}</h1>
  )
}

export default EditUser