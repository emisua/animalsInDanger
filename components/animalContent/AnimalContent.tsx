/* eslint-disable @next/next/no-img-element */
import { adapterAnimal } from '@/adapters/adapterAnimal'
import { AdaptedAnimal, Animal } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const AnimalContent = ({ animal }: { animal: Animal }) => {
  const adaptedAnimal: AdaptedAnimal = adapterAnimal(animal)
  return (
    <>
      <article
        className={`min-h-screen hidden sm:flex flex-col lg:flex-row lg:justify-end justify-center items-center lg:p-20 p-4`}
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 4%, .8), hsla(0, 0%, 4%, .8)), url("/img/lemur.jpg")`,
          backgroundSize: 'cover',
        }}
      >
        <section className='flex flex-col bg-white/10 backdrop-blur-sm p-4 rounded-md'>
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
      <article className={`min-h-screen flex sm:hidden flex-col bg-black`}>
        <Link
          className='goBack absolute top-4 left-4 bg-white/30 py-1 px-2 rounded backdrop-blur-md text-sm'
          href='/'
        >
          Volver
        </Link>
        <img src='/img/oso-polar.jpg' alt={animal?.common_name} />
        <section className='flex flex-col  text-gray-200'>
          <header className='flex flex-row justify-center items-center'>
            <div className='title bg-gray-900 p-4 flex-1'>
              <h1 className='text-4xl font-bold '>{animal?.common_name}</h1>
              <h6>{animal?.geographic_distribution}</h6>
            </div>
            <div className='danger-level p-4 min-w-28 flex justify-center items-center flex-col bg-gray-950'>
              <h6>Peligro</h6>
              <p className='text-4xl font-bold'>{animal?.danger_level}</p>
            </div>
          </header>
          <main className='px-4 py-8'>
            <ul className='datos'>
              {Object.keys(adaptedAnimal).map((key: any) => (
                <li key={key} className='mb-2'>
                  <p className='font-semibold text-gray-200'>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </p>
                  <p>{adaptedAnimal[key as keyof AdaptedAnimal]}</p>
                </li>
              ))}
            </ul>
          </main>
        </section>
      </article>
    </>
  )
}

export default AnimalContent
