import { AnimalsGrid } from '@/components/animalGrid/AnimalsGrid'
import React from 'react'

const page = async () => {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
  const res = await fetch(`${apiBaseUrl}/animals`)
  const { animals } = await res?.json()

  if (!animals) return <p>Cargando...</p>
  else {
    return (
      <main className='container mx-auto my-16'>
        <h1 className='text-4xl font-bold'>
          Listado de animales en peligro de extinción
        </h1>
        <AnimalsGrid animals={animals} />
      </main>
    )
  }
}

export default page
