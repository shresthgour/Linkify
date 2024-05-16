import React from 'react'
import { useParams } from 'react-router-dom';

const Analytics = () => {
  const { id } = useParams();

  return (
    <div className=''>
      <h1 className=''>Analytics Page</h1>
      <p className=''>Analytics ID: {id}</p>
    </div>
  )
}

export default Analytics