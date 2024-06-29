import React from 'react'

const page = async ({ params }: { params: { path: string } }) => {
  const { path } = params
  const response = await fetch(`http://localhost:3000/api/animals/${path}`)
  const data = await response.json()
  console.log(data)

  return data ? <h1>{JSON.stringify(data?.animals)}</h1> : 'Cargando...'
}

export default page
