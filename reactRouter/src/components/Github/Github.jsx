import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()    // useLoaderData() returns the result of the loader function

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/prakash751321')
    //     .then(res => res.json())
    //     .then(data => 
    //         console.log(data),
    //         setData(data))
    // }, [])

  return (
    <div className='text-3xl text-center m-4 bg-gray-600 text-white p-4'>Github followers : {data.followers}
        <img className='' src={data.avatar_url} alt="Git Picture" />
    </div>
    
  )
}

export default Github

    // Right below is the custom loader function. It is used for API call.
    // It is more optimized than useEffect()

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prakash751321')
    return response.json()
  }