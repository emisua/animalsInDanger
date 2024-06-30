import React from 'react'

const Page = async ({ params }: { params: { path: string } }) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL
  const { path } = params

  try {
    const response = await fetch(`${apiBaseUrl}/api/animals/${path}`, {
      next: { revalidate: 0 },
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch animal data: ${response.statusText}`)
    }

    const data = await response.json()

    return data && data.animals ? (
      <h1>{JSON.stringify(data.animals)}</h1>
    ) : (
      <p>Cargando...</p>
    )
  } catch (error) {
    return <p>Error al cargar los datos del animal.</p>
  }
}

export default Page
