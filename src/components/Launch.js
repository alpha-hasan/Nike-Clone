import React from 'react'
import { Outlet } from 'react-router-dom'

export const Launch = () => {
  return (
    <div>
      <h1 className='text-center container'>Launch</h1>
      <Outlet />
    </div>
  )
}
