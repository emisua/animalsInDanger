import { AnimalsGrid } from '@/components/animalGrid/AnimalsGrid'
import React from 'react'

const Page = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const res = await fetch(`${apiBaseUrl}/api/animals`, { cache: 'no-store' })

    if (!res.ok) {
      const text = await res.text()
      console.error('Error response:', text)

      throw new Error('Failed to fetch animals')
    }

    const { animals } = await res.json()

    if (!animals) {
      return <p>Cargando...</p>
    }

    return (
      <main className='container mx-auto my-16'>
        <h1 className='text-4xl font-bold'>
          Listado de animales en peligro de extinción
        </h1>
        <AnimalsGrid animals={animals} />
      </main>
    )
  } catch (error) {
    console.error('Error fetching animals:', error)
    return <p>Error al cargar los datos de animales.</p>
  }
}

export default Page
