/* eslint-disable @next/next/no-img-element */
import { Animal } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import { dangerColor, removeAccents } from '../../utils/utils'

const AnimalCard = ({ animal }: { animal: Animal }) => {
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

        <p className={`text-${dangerColor(animal.danger_level)}`}>
          {animal.conservation_status}
        </p>
        <small className='flex flex-1 justify-center items-end'>
          <Link
            className=' text-orange-500'
            href={`/animals/${removeAccents(animal.path)}`}
          >
            Detalles
          </Link>
        </small>
      </div>
    </article>
  )
}

export default AnimalCard
