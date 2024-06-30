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
    <article className='flex flex-col items-center gap-4 border p-4 rounded-md border-gray-700/50'>
      <div className='img max-w-16 rounded-full overflow-hidden'>
        <img
          src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLglv08LlfTQb9L1rHlxFIkSJ72agTTuhsLP3kB53unIwTtqaJ'
          alt={animal.common_name}
        />
      </div>
      <div className='content flex flex-col gap-2 flex-1 w-full text-center'>
        <h4 className='font-bold'>
          {animal.common_name}

          <span className='italic font-light opacity-50 pl-1'>
            ({animal.scientific_name})
          </span>
        </h4>

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
            href={`/animals/${removeAccents(animal.path)}`}
          >
            + info
          </Link>
        </small>
      </div>
    </article>
  )
}

export default AnimalCard
