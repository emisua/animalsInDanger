'use client'
import { adapterAnimal } from '@/adapters/adapterAnimal'
import { Animal } from '@/types/types'
import React from 'react'

const AnimalContent = ({ animal }: { animal: Animal }) => {
  const adaptedAnimal = adapterAnimal(animal)
  return (
    <article
      className={`min-h-screen  flex justify-end items-center p-20`}
      style={{
        backgroundImage: `linear-gradient(hsla(0, 0%, 4%, .8), hsla(0, 0%, 4%, .8)), url("/img/lemur.jpg")`,
        backgroundSize: 'cover',
      }}
    >
      <section className='max-w-md flex flex-col bg-white/10 backdrop-blur-sm p-4 rounded-md'>
        <h1 className='text-4xl font-bold'>{animal?.common_name}</h1>
        <h6>{animal.geographic_distribution}</h6>
        <ul className='datos mt-4'>
          {Object.keys(adaptedAnimal).map((key: any) => (
            <li key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
              {adaptedAnimal[key]}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default AnimalContent
