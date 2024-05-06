import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userId} = useParams()    // to access the route(URL) params
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Users : {userId}</div>
  )
}

export default Users