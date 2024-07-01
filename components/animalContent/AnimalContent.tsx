import { adapterAnimal } from '@/adapters/adapterAnimal'
import { AdaptedAnimal, Animal } from '@/types/types'
import React from 'react'

const AnimalContent = ({ animal }: { animal: Animal }) => {
  const adaptedAnimal: AdaptedAnimal = adapterAnimal(animal)
  return (
    <article
      className={`min-h-screen flex flex-col lg:flex-row lg:justify-end justify-center items-center lg:p-20 p-4`}
      style={{
        backgroundImage: `linear-gradient(hsla(0, 0%, 4%, .8), hsla(0, 0%, 4%, .8)), url("/img/lemur.jpg")`,
        backgroundSize: 'cover',
      }}
    >
      <section className='lg:max-w-md w-full flex flex-col bg-white/10 backdrop-blur-sm p-4 rounded-md '>
        <h1 className='text-4xl font-bold'>{animal?.common_name}</h1>
        <h6>{animal?.geographic_distribution}</h6>
        <ul className='datos mt-4'>
          {Object.keys(adaptedAnimal).map((key: any) => (
            <li key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
              {adaptedAnimal[key as keyof AdaptedAnimal]}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default AnimalContent
