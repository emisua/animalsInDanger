import { AnimalsGrid } from '@/components/animalGrid/AnimalsGrid'
import React from 'react'

const page = async () => {
  const response = await fetch(
    'https://critical-animals.vercel.app/api/animals'
  )
  const data = await response.json()
  console.log(data)

  if (!data) return <p>Cargando...</p>

  if (data) {
    return (
      <main className='container mx-auto my-16'>
        <h1 className='text-4xl font-bold'>
          Listado de animales en peligro de extinción
        </h1>
        <AnimalsGrid animals={data?.animals} />
      </main>
    )
  }
}

export default page
