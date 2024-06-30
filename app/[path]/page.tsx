import AnimalContent from '@/components/animalContent/AnimalContent'
import React from 'react'

const Page = async ({ params }: { params: { path: string } }) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const { path } = params

  try {
    const response = await fetch(`${apiBaseUrl}/api/animals/${path}`, {
      cache: 'no-store',
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch animal data: ${response.statusText}`)
    }

    const { data } = await response.json()

    console.log({ data })

    return data ? <AnimalContent animal={data[0]} /> : <p>Cargando...</p>
  } catch (error) {
    return <p>Error al cargar los datos del animal.</p>
  }
}

export default Page
