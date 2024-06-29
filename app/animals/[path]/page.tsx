import React from 'react'

const page = async ({ params }: { params: { path: string } }) => {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

  const { path } = params
  const response = await fetch(`${apiBaseUrl}/animals/${path}`)
  const data = await response.json()
  console.log(data)

  return data ? <h1>{JSON.stringify(data?.animals)}</h1> : 'Cargando...'
}

export default page
