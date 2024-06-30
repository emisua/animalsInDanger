'use client'
import { Animal } from '@/types/types'
import React from 'react'

const AnimalContent = ({ animal }: { animal: Animal }) => {
  console.log(animal)
  return (
    <article className='bg-red-500 min-h-screen grid place-content-center'>
      <h1>{animal?.common_name}</h1>
    </article>
  )
}

export default AnimalContent
