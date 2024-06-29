import { AnimalsGrid } from '@/components/animalGrid/AnimalsGrid'
import React from 'react'

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/animals`)
  const { animals } = await response?.json()

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
