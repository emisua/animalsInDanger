/* eslint-disable @next/next/no-img-element */
import { Animal } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import { removeAccents } from '../../utils/utils'

const AnimalCard = ({ animal }: { animal: Animal }) => {
  const dangerColors = {
    '1': 'bg-orange-200',
    '2': 'bg-orange-500',
    '3': 'bg-red-400',
    '4': 'bg-red-500',
    '5': 'bg-red-600',
  }
  return (
    <article className='flex flex-col items-center border rounded-md border-gray-700/50 hover:border-yellow-200 transition-all duration-300 bg-gray-950 overflow-hidden text-gray-300'>
      <img
        className='aspect-[16/8] object-cover'
        src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLglv08LlfTQb9L1rHlxFIkSJ72agTTuhsLP3kB53unIwTtqaJ'
        alt={animal.common_name}
      />

      <div className='content flex flex-col gap-4 flex-1 w-full text-center p-4'>
        <div className='title '>
          <h4 className='font-bold'>{animal.common_name}</h4>
          <h6 className='italic font-light opacity-50 pl-1 text-sm'>
            ({animal.scientific_name})
          </h6>
        </div>

        <p className={'flex items-center justify-center gap-2 text-sm'}>
          <span
            className={`${
              dangerColors[animal?.danger_level]
            } bullet w-2 h-2 flex rounded-full`}
          />
          {animal.conservation_status}
        </p>
        <small className='flex flex-1 justify-center items-end'>
          <Link
            className='text-yellow-200 hover:text-teal-500'
            href={`/${removeAccents(animal.path)}`}
          >
            + info
          </Link>
        </small>
      </div>
    </article>
  )
}

export default AnimalCard
